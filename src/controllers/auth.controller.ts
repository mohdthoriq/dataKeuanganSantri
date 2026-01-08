// src/controllers/auth.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { AuthService } from "../services/auth.service";
import { EmailVerificationService } from "../services/emailVerification.service";

export interface IAuthController {
  registerAdmin(req: Request, res: Response): Promise<void>;
  login(req: Request, res: Response): Promise<void>;
  requestReset(req: Request, res: Response): Promise<void>;
  resetPassword(req: Request, res: Response): Promise<void>;
}

export class AuthController implements IAuthController {
  constructor(private authService: AuthService) { }

  registerAdmin = async (req: Request, res: Response) => {
    const result = await this.authService.registerAdmin(req.body);

    if (result?.data?.otpCode) {
      console.log("OTP REQUEST:", result.data.otpCode);
    }

    successResponse(res, "Register admin successfully", result);
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await this.authService.login({ email, password });

    successResponse(res, "Login successfully", result);
  };

  requestReset = async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) throw new Error("Email is required");

    await this.authService.requestReset(email);

    successResponse(res, "Request reset successfully", null);
  };

  resetPassword = async (req: Request, res: Response) => {
    const { userId, otpCode, newPassword } = req.body;
    if (!userId || !otpCode || !newPassword) throw new Error("Missing parameters");

    await this.authService.resetPassword(userId, otpCode, newPassword);

    successResponse(res, "Reset password successfully", null);
  };
}
