// src/services/auth.service.ts
import bcrypt from "bcrypt";
import PrismaInstance from "../database";
import { randomInt } from "crypto";
import { sendEmail } from "./emailVerification.service";

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

    const user = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,
            role: "ADMIN",
            isEmailVerified: false,
            isActive: true,
            createdAt: new Date(),
        }
    })

    const otpCode = randomInt(100000, 999999).toString()
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000);

    await prisma.emailVerification.create({
        data: {
            userId: user.id,
            otpCode,
            expiredAt,
        }
    })

    console.log("OTP:", otpCode);

    const emailSent = await sendEmail(user.email, "verifikasi Email", `Kode verifikasi Anda adalah ${otpCode}`)

    return {
        userId: user.id,
        email: user.email,
        username: user.username,
        otpSent: emailSent,
        message: "Silakan cek email untuk verifikasi",
    };
}



