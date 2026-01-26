import { EmailVerificationRepository } from "../repository/emailVerification.repository";
import type { PrismaClient } from "../database";
import { sendEmail } from "../utils/apiKey";

export class EmailVerificationService {
  constructor(private repo: EmailVerificationRepository, private prisma: PrismaClient) { }

  async requestOtpByEmail(email: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found");
    if (user.isEmailVerified) throw new Error("Email already verified");

    const otp = await this.repo.generateOtp(user.id);

    const styledHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Verifikasi Kode OTP</h2>
        </div>
        <div style="padding: 30px; background-color: #ffffff; text-align: center;">
          <p style="font-size: 16px; color: #333;">Halo,</p>
          <p style="font-size: 16px; color: #333;">Berikut adalah kode OTP Anda untuk verifikasi email:</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; display: inline-block;">
            <h1 style="margin: 0; font-size: 36px; letter-spacing: 5px; color: #1f2937;">${otp.otpCode}</h1>
          </div>
          <p style="font-size: 14px; color: #6b7280;">Kode ini berlaku selama 10 menit (sampai ${otp.expiredAt.toLocaleString('id-ID')}).</p>
          <p style="font-size: 14px; color: #ef4444; margin-top: 20px;">Jangan berikan kode ini kepada siapapun.</p>
        </div>
        <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e1e1e1;">
          <p>&copy; ${new Date().getFullYear()} Aplikasi Keuangan Santri</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: user.email,
      subject: "Kode Verifikasi OTP",
      html: styledHtml,
    });

    return {
      success: true,
      message: "OTP sent successfully",
      ...(process.env.NODE_ENV === "development" && {
        otpCode: otp.otpCode,
        expiredAt: otp.expiredAt,
      }),
    };
  }


  async verifyOtpByEmail(email: string, otpCode: string) {
    const user = await this.prisma.users.findUnique({
      where: { email },
    });

    if (!user) throw new Error("User not found");

    const verified = await this.repo.verifyOtp(user.id, otpCode);
    return { verified };
  }

  async resendOtp(userId: string) {
    const user = await this.prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) throw new Error("User not found");
    const otp = await this.repo.generateOtp(userId);

    const styledHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
        <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
          <h2 style="margin: 0;">Kirim Ulang Kode OTP</h2>
        </div>
        <div style="padding: 30px; background-color: #ffffff; text-align: center;">
          <p style="font-size: 16px; color: #333;">Halo,</p>
          <p style="font-size: 16px; color: #333;">Sesuai permintaan Anda, berikut adalah kode OTP baru:</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; display: inline-block;">
            <h1 style="margin: 0; font-size: 36px; letter-spacing: 5px; color: #1f2937;">${otp.otpCode}</h1>
          </div>
          <p style="font-size: 14px; color: #6b7280;">Kode ini berlaku sampai ${otp.expiredAt.toLocaleString('id-ID')}.</p>
        </div>
        <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e1e1e1;">
          <p>&copy; ${new Date().getFullYear()} Aplikasi Keuangan Santri</p>
        </div>
      </div>
    `;

    await sendEmail({
      to: user.email,
      subject: "Kirim Ulang Kode Verifikasi OTP",
      html: styledHtml,
    });

    return {
      success: true,
      ...(process.env.NODE_ENV === "development" && {
        otpCode: otp.otpCode,
        expiredAt: otp.expiredAt,
      }),
    };
  }

  async getActiveOtp(userId: string) {
    return this.repo.findActiveOtp(userId);
  }
}