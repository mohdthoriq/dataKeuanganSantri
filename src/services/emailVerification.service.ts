import { EmailVerificationRepository } from "../repository/emailVerification.repository";
import type { PrismaClient } from "../generated";

export class EmailVerificationService {
  constructor(private repo: EmailVerificationRepository, private prisma: PrismaClient) {}

  async requestOtp(email: string) {
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

  // async resendOtp(userId: number) {
  //   const user = await this.prisma.user.findUnique({
  //     where: { id: userId },
  //   });

  //   if (!user) throw new Error("User not found");
  //   const otp = await this.repo.generateOtp(userId);
  //   await sendEmail({
  //     to: user.email,
  //     subject: "Resend OTP Verification",
  //     html: `
  //     <h2>OTP Verification</h2>
  //     <h1>${otp.otpCode}</h1>
  //     <p>Berlaku sampai ${otp.expiredAt.toLocaleString()}</p>
  //   `,
  //   });

  //   return {
  //     success: true,
  //     ...(process.env.NODE_ENV === "development" && {
  //       otpCode: otp.otpCode,
  //       expiredAt: otp.expiredAt,
  //     }),
  //   };
  // }

  async getActiveOtp(userId: number) {
    return this.repo.findActiveOtp(userId);
  }
}
