import { randomInt } from "crypto";
import type { PrismaClient, EmailVerification, Prisma } from "../database";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export interface IEmailVerificationRepository {
  generateOtp(userId: string): Promise<EmailVerification>;
  verifyOtp(userId: string, otpCode: string): Promise<boolean>;
  findActiveOtp(userId: string): Promise<EmailVerification | null>;
  invalidateOtps(userId: string): Promise<void>;
}

export class EmailVerificationRepository implements IEmailVerificationRepository {
  constructor(private prisma: PrismaClient) { }

  async generateOtp(userId: string): Promise<EmailVerification> {
    // Hapus OTP lama yang belum dipakai
    await this.prisma.emailVerification.deleteMany({
      where: { userId, isUsed: false },
    });

    const otpCode = randomInt(100000, 999999).toString();
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

    const otp = await this.prisma.emailVerification.create({
      data: { userId, otpCode, expiredAt },
    });

    return otp;
  }

  async verifyOtp(userId: string, otpCode: string): Promise<boolean> {
    const record = await this.prisma.emailVerification.findFirst({
      where: {
        userId,
        otpCode,
        isUsed: false,
        expiredAt: { gte: new Date() },
      },
    });

    if (!record) throw new Error("Invalid OTP");

    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.emailVerification.update({
        where: { id: record.id },
        data: { isUsed: true },
      });

      await tx.users.update({
        where: { id: userId },
        data: { isEmailVerified: true },
      });
    });
    return true;
  }

  async findActiveOtp(userId: string): Promise<EmailVerification | null> {
    return this.prisma.emailVerification.findFirst({
      where: { userId, isUsed: false, expiredAt: { gte: new Date() } },
    });
  }

  async invalidateOtps(userId: string): Promise<void> {
    await this.prisma.emailVerification.updateMany({
      where: { userId, isUsed: false },
      data: { isUsed: true },
    });
  }
}