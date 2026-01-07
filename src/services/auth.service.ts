// src/services/auth.service.ts
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import type { IAuthRepository, RegisterAdminPayload } from "../repository/auth.repository";
import config from "../utils/env"; 


export class AuthService {
  constructor(private authRepo: IAuthRepository) {}

  async registerAdmin(payload: RegisterAdminPayload) {
    const { username, email, password, institution } = payload;

    // cek user exist
    const existing = await this.authRepo.findByEmail(email);
    if (existing) throw new Error("User already exists");

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create admin + institution + OTP
    return this.authRepo.registerAdmin({
      username,
      email,
      password: hashedPassword,
      institution,
    });
  }

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

  async requestReset(email: string) {
    return this.authRepo.requestReset(email);
  }

  async resetPassword(userId: number, otpCode: string, newPassword: string) {
    return this.authRepo.resetPassword(userId, otpCode, newPassword);
  }
}
