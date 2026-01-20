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

    const otpCode = result.data.otpCode;

    // Selalu kirim email jika ada otpCode
    if (result.data.otpCode) {
      await sendEmail({
        to: result.data.email,
        subject: "OTP Verification",
        html: `
          <h2>OTP Verification</h2>
          <h1>${result.data.otpCode}</h1>
          <p>Berlaku 10 menit</p>
        `,
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
      await sendEmail({
        to: email,
        subject: "Reset Password OTP",
        html: `
          <h2>Reset Password</h2>
          <h1>${result.otpCode}</h1>
          <p>Berlaku 10 menit</p>
        `,
      });
    }

    return result;
  }

  async resetPassword(userId: string, otpCode: string, newPassword: string) {
    return this.authRepo.resetPassword(userId, otpCode, newPassword);
  }
}