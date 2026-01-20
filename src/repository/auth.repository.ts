import bcrypt from "bcrypt";
import { randomInt } from "crypto";
import jwt from "jsonwebtoken";
import type { PrismaClient, Users } from "../database";
import config from "../utils/env";

export type RegisterAdminPayload = {
    username: string;
    email: string;
    password: string;
    institution: string;
}

export type RegisterAdminResult = {
    success: boolean;
    message: string;
    data: {
        userId: string;
        email: string;
        otpCode?: string;
    };
};

export type LoginResult = {
    token: string;
    user: {
        username: string;
        role: string;
        institutionName?: string | null;
    };
};

export type RequestResetResult = {
    success: boolean;
    message?: string;
    otpCode?: string;
};


export interface IAuthRepository {
    findByEmail(email: string): Promise<Users | null>;
    registerAdmin(payload: RegisterAdminPayload): Promise<RegisterAdminResult>;
    login(email: string, password: string): Promise<LoginResult>;
    requestReset(email: string): Promise<RequestResetResult>;
    resetPassword(userId: string, otpCode: string, newPassword: string): Promise<RequestResetResult>;
}

export class AuthRepository implements IAuthRepository {
    constructor(private prisma: PrismaClient) { }

    async findByEmail(email: string): Promise<Users | null> {
        return await this.prisma.users.findUnique({ where: { email } });
    }

    async registerAdmin(payload: RegisterAdminPayload): Promise<RegisterAdminResult> {
        const { username, email, password, institution } = payload;

        if (!username || !email || !password) {
            throw new Error("Username, email, and password are required");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await this.prisma.$transaction(async (tx) => {
            const admin = await tx.users.create({
                data: {
                    username,
                    email,
                    password: hashedPassword,
                    role: "ADMIN",
                    isEmailVerified: false,
                    isActive: true,
                },
            });

            const lembaga = await tx.institution.create({
                data: {
                    name: institution,
                    createdBy: admin.id,
                },
            });

            const updatedAdmin = await tx.users.update({
                where: { id: admin.id },
                data: { institutionId: lembaga.id },
            });
            const otpCode = randomInt(100000, 999999).toString();
            const expiredAt = new Date(Date.now() + 10 * 60 * 1000);

            await tx.emailVerification.create({
                data: {
                    userId: admin.id,
                    otpCode,
                    expiredAt,
                    isUsed: false,
                },
            });

            return { user: updatedAdmin, otpCode };
        });

        return {
            success: true,
            message: "Registration successful. Please check your email for OTP.",
            data: {
                userId: result.user.id,
                email: result.user.email,
                otpCode: result.otpCode,
            },
        };
    }

    async login(email: string, password: string): Promise<LoginResult> {
        const user = await this.prisma.users.findUnique({
            where: { email },
            include: { institution: { select: { name: true } } }
        });
        if (!user) throw new Error("User not found");

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) throw new Error("Invalid password");

        if (!user.isEmailVerified) throw new Error("Email not verified");

        const token = jwt.sign(
            { id: user.id, role: user.role, institutionId: user.institutionId, institutionName: user.institution?.name },
            config.JWT_SECRET!,
            { expiresIn: "1h" }
        );

        return {
            token,
            user: {
                username: user.username,
                role: user.role,
                institutionName: user.institution?.name ?? null,
            },
        };
    }
    async requestReset(email: string): Promise<RequestResetResult> {
        const user = await this.prisma.users.findUnique({ where: { email } });
        if (!user) return { success: false, message: "User not found" };

        await this.prisma.passwordReset.deleteMany({
            where: { userId: user.id, isUsed: false },
        });

        const otpCode = randomInt(100000, 999999).toString();
        const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

        await this.prisma.passwordReset.create({
            data: { userId: user.id, otpCode, expiredAt, isUsed: false },
        });

        return { success: true, message: "OTP sent successfully", otpCode };
    }
    async resetPassword(userId: string, otpCode: string, newPassword: string): Promise<RequestResetResult> {
        const record = await this.prisma.passwordReset.findFirst({
            where: { userId, otpCode, isUsed: false, expiredAt: { gte: new Date() } },
        });

        if (!record) throw new Error("Invalid OTP");

        await this.prisma.passwordReset.update({ where: { id: record.id }, data: { isUsed: true } });

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await this.prisma.users.update({ where: { id: userId }, data: { password: hashedPassword } });

        return { success: true, message: "Password reset successfully" };
    }
}