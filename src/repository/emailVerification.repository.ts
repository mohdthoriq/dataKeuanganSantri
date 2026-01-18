import { randomInt } from "crypto";
import type { PrismaClient, email_verification, Prisma } from "../database";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export interface IEmailVerificationRepository {
  generateOtp(userId: number): Promise<email_verification>;
  verifyOtp(userId: number, otpCode: string): Promise<boolean>;
  findActiveOtp(userId: number): Promise<email_verification | null>;
  invalidateOtps(userId: number): Promise<void>;
}

export class EmailVerificationRepository implements IEmailVerificationRepository {
  constructor(private prisma: PrismaClient) { }

  async generateOtp(userId: number): Promise<email_verification> {
    // Hapus OTP lama yang belum dipakai
    await this.prisma.email_verification.deleteMany({
      where: { userId, isUsed: false },
    });

    const otpCode = randomInt(100000, 999999).toString();
    const expiredAt = new Date(Date.now() + 10 * 60 * 1000); // 10 menit

    const otp = await this.prisma.email_verification.create({
      data: { userId, otpCode, expiredAt },
    });

    return otp;
  }

  async verifyOtp(userId: number, otpCode: string): Promise<boolean> {
    const record = await this.prisma.email_verification.findFirst({
      where: {
        userId,
        otpCode,
        isUsed: false,
        expiredAt: { gte: new Date() },
      },
    });

    if (!record) throw new Error("Invalid OTP");

    await this.prisma.$transaction(async (tx: Prisma.TransactionClient) => {
      await tx.email_verification.update({
        where: { id: record.id },
        data: { isUsed: true },
      });

      await tx.user.update({
        where: { id: userId },
        data: { isEmailVerified: true },
      });
    });
    return true;
  }

  async findActiveOtp(userId: number): Promise<email_verification | null> {
    return this.prisma.email_verification.findFirst({
      where: { userId, isUsed: false, expiredAt: { gte: new Date() } },
    });
  }

  async invalidateOtps(userId: number): Promise<void> {
    await this.prisma.email_verification.updateMany({
      where: { userId, isUsed: false },
      data: { isUsed: true },
    });
  }
}