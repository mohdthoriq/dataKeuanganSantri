// src/services/auth.service.ts
import bcrypt from "bcrypt";
import PrismaInstance from "../database";
import { randomInt } from "crypto";
import jwt from "jsonwebtoken";

const prisma = PrismaInstance;

interface RegisterAdminPayload {
    username: string;
    email: string;
    password: string;
}

export const registerAdmin = async (payload: RegisterAdminPayload) => {
    const { username, email, password } = payload;

    if (!username || !email || !password) {
        throw new Error("Bad Request");
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (existingUser) {
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.$transaction(async (tx) => {
        // Create user
        const newUser = await tx.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
                role: "ADMIN",
                isEmailVerified: false,
                isActive: true,
            }
        });

        // Generate OTP
        const otpCode = randomInt(100000, 999999).toString();
        const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

        // Simpan OTP
        await tx.emailVerification.create({
            data: {
                userId: newUser.id,
                otpCode,
                expiredAt,
                isUsed: false,
            }
        });

        return { user: newUser, otpCode };
    });

    console.log(`OTP ${user.otpCode} sent to ${user.user.email}`);
    
    
    return {
        success: true,
        message: "Registration successful. Please check your email for OTP.",
        data: {
            userId: user.user.id,
            email: user.user.email,
            // Untuk development saja
            ...(process.env.NODE_ENV === 'development' && {
                otpCode: user.otpCode
            })
        }
    };
}

export const login = async (email:string, password:string) => {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (!user) {
        throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error("Invalid password");
    }

    if (!user.isEmailVerified) {
        throw new Error("Email not verified");
    }

    const token = jwt.sign({
        userId: user.id,
        email: user.email,
    }, process.env.JWT_SECRET || "secret", {
        expiresIn: "1h",
    });

    return {
        token,
        user: {
            id: user.id,
            email: user.email,
            role: user.role,
            username: user.username,
        }
    };
}

export const requestReset = async(email: string)=> {
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    })

    if (!user) return true

    await prisma.passwordReset.deleteMany({
        where: {
            userId: user.id,
            isUsed: false,
        },
    })

    const otpCode = randomInt(100000, 999999).toString();
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

    await prisma.passwordReset.create({
        data: {
            userId: user.id,
            otpCode,
            expiredAt,
            isUsed: false,
        },
    })

    return true
}

export const resetPassword = async(userId: number, otpCode: string, newPassword: string) => {
    const record = await prisma.passwordReset.findFirst({
        where: {
            userId,
            otpCode,
            isUsed: false,
            expiredAt: {
                gte: new Date(),
            },
        },
    })

    if (!record) throw new Error("Invalid OTP");

    await prisma.passwordReset.update({
        where: {
            id: record.id,
        },
        data: {
            isUsed: true,
        },
    })

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            password: hashedPassword,
        },
    })

    return true
}