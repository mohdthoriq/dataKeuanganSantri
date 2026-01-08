import { EmailVerificationRepository } from "../repository/emailVerification.repository";
import type { PrismaClient } from "../generated";

export class EmailVerificationService {
  constructor(private repo: EmailVerificationRepository, private prisma: PrismaClient) { }

  async requestOtpByEmail(email: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found");
    if (user.isEmailVerified) throw new Error("Email already verified");

    const otp = await this.repo.generateOtp(user.id);

    return {
      email: user.email,
      otpCode: otp.otpCode,
      expiredAt: otp.expiredAt,
    };
  }


  async verifyOtpByEmail(email: string, otpCode: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found");

    const verified = await this.repo.verifyOtp(user.id, otpCode);
    return { verified };
  }

  async resendOtp(userId: number) {
    // invalidate OTP lama
    await this.repo.invalidateOtps(userId);
    const otp = await this.repo.generateOtp(userId);
    return {
      otpCode: otp.otpCode,
      expiredAt: otp.expiredAt,
    };
  }

  async getActiveOtp(userId: number) {
    return this.repo.findActiveOtp(userId);
  }
}
