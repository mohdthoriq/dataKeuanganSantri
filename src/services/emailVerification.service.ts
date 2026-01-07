import { EmailVerificationRepository } from "../repository/emailVerification.repository";
import type { PrismaClient } from "../generated";

export class EmailVerificationService {
  constructor(private repo: EmailVerificationRepository) {}

  async requestOtp(userId: number) {
    const otp = await this.repo.generateOtp(userId);
    // Bisa disini tambahin logika kirim email
    return {
      otpCode: otp.otpCode,
      expiredAt: otp.expiredAt,
    };
  }

  async verifyOtp(userId: number, otpCode: string) {
    const verified = await this.repo.verifyOtp(userId, otpCode);
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
