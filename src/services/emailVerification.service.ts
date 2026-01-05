import { randomInt } from "crypto";
import nodemailer from "nodemailer";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export const generateOtp = async(userId: number) => {
    const otpCode = randomInt(100000, 999999).toString();
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit kadaluarsa

    const otp = await prisma.emailVerification.create({
        data: {
            userId,
            otpCode,
            expiredAt,
        },
    });

    return otp;
}

export const verifyOtp = async(userId: number, otpCode: string) => {
    const record = await prisma.emailVerification.findFirst({
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

    await prisma.emailVerification.update({
        where: {
            id: record.id,
        },
        data: {
            isUsed: true,
        },
    })

    await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            isEmailVerified: true,
        },
    })

    return true;
}

export const sendEmail = async(to: string, subject: string, text: string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    
    const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        text,
    })

    return info;
}