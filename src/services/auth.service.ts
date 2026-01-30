// src/services/auth.service.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { IAuthRepository, RegisterAdminPayload } from "../repository/auth.repository";
import config from "../utils/env";
import { sendEmail } from "../utils/apiKey";


export class AuthService {
  constructor(private authRepo: IAuthRepository) { }

  async registerAdmin(payload: RegisterAdminPayload) {
    const { username, email, password, institution } = payload;

    // cek user exist
    const existing = await this.authRepo.findByEmail(email);
    if (existing) throw new Error("User already exists");

    // create admin + institution + OTP
    const result = await this.authRepo.registerAdmin({
      username,
      email,
      password,
      institution,
    });
    // Selalu kirim email jika ada otpCode
    if (result.data.otpCode) {
      const styledHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #3b82f6; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Verifikasi Akun Admin</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff; text-align: center;">
            <p style="font-size: 16px; color: #333;">Halo <strong>${username}</strong>,</p>
            <p style="font-size: 16px; color: #333;">Selamat datang! Gunakan kode OTP di bawah ini untuk memverifikasi akun Admin Anda:</p>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0; display: inline-block;">
              <h1 style="margin: 0; font-size: 36px; letter-spacing: 5px; color: #1f2937;">${result.data.otpCode}</h1>
            </div>
            <p style="font-size: 14px; color: #6b7280;">Kode ini berlaku selama 10 menit. Jangan berikan kode ini kepada siapapun.</p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e1e1e1;">
            <p>&copy; ${new Date().getFullYear()} Aplikasi Keuangan Santri</p>
          </div>
        </div>
      `;

      await sendEmail({
        to: result.data.email,
        subject: "Kode Verifikasi OTP Admin",
        html: styledHtml,
      });
    }

    // Hide otpCode in production
    if (config.NODE_ENV === "development") {
      delete result.data.otpCode;
    }

    return result;
  }

  async login(data: { email: string; password: string }) {
    const { email, password } = data;
    console.log(`🔐 Login attempt for: ${email}`);

    const result = await this.authRepo.login(email, password);

    console.log(`✅ Login successful for: ${email}`);
    return result;
  }


  async requestReset(email: string) {
    const result = await this.authRepo.requestReset(email);

    if (result.success && result.otpCode) {
      const styledHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #f59e0b; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">Reset Password</h2>
          </div>
          <div style="padding: 30px; background-color: #ffffff; text-align: center;">
            <p style="font-size: 16px; color: #333;">Halo,</p>
            <p style="font-size: 16px; color: #333;">Kami menerima permintaan untuk mereset password akun Anda. Gunakan kode OTP berikut:</p>
            <div style="background-color: #fff7ed; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #fdba74; display: inline-block;">
              <h1 style="margin: 0; font-size: 36px; letter-spacing: 5px; color: #9a3412;">${result.otpCode}</h1>
            </div>
            <p style="font-size: 14px; color: #6b7280;">Kode ini berlaku selama 10 menit. Jika Anda tidak merasa melakukan permintaan ini, silakan abaikan email ini.</p>
          </div>
          <div style="background-color: #f9fafb; padding: 15px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e1e1e1;">
            <p>&copy; ${new Date().getFullYear()} Aplikasi Keuangan Santri</p>
          </div>
        </div>
      `;

      await sendEmail({
        to: email,
        subject: "Kode OTP Reset Password",
        html: styledHtml,
      });
    }

    return result;
  }

  async resetPassword(userId: string, otpCode: string, newPassword: string) {
    return this.authRepo.resetPassword(userId, otpCode, newPassword);
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string) {
    return this.authRepo.changePassword(userId, currentPassword, newPassword);
  }
}