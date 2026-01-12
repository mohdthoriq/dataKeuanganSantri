// src/services/auth.service.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { IAuthRepository, RegisterAdminPayload } from "../repository/auth.repository";
import config from "../utils/env"; 

export class AuthService {
  constructor(private authRepo: IAuthRepository) {}

  // =================== REGISTER ===================
  async registerAdmin(payload: RegisterAdminPayload) {
    const { username, email, password, institution } = payload;

    const existing = await this.authRepo.findByEmail(email);
    if (existing) throw new Error("User already exists");

    const result = await this.authRepo.registerAdmin({
      username,
      email,
      password,
      institution,
    });

    return {
    ...result,
    email,
  };
  }

  // =================== LOGIN ===================
  async login(data: { email: string; password: string }) {
    const { email, password } = data;

    const user = await this.authRepo.findByEmail(email);
    if (!user) throw new Error("User not found");
    if (!user.isEmailVerified) throw new Error("Email not verified");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Invalid password");

    const token = jwt.sign(
      { id: user.id, role: user.role, institutionId: user.institutionId },
      config.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return { user, token };
  }

  // =================== REQUEST RESET ===================
  async requestReset(email: string) {
    return this.authRepo.requestReset(email);
  }

  // =================== RESET PASSWORD ===================
  async resetPassword(userId: number, otpCode: string, newPassword: string) {
    return this.authRepo.resetPassword(userId, otpCode, newPassword);
  }

  // =================== HELPER UNTUK CONTROLLER ===================
  // Agar controller bisa ambil user dari email tanpa akses private authRepo
  async findUserByEmail(email: string) {
    const user = await this.authRepo.findByEmail(email);
    if (!user) throw new Error("User not found");
    return user;
  }
}
