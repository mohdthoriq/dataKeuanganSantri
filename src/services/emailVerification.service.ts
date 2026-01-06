import { randomInt } from "crypto";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export const generateOtp = async(userId: number) => {
    await prisma.emailVerification.deleteMany({
        where: {
            userId,
            isUsed: false,
        },
    });

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
