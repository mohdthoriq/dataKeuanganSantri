// src/controllers/auth.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { AuthService } from "../services/auth.service";

export interface IAuthController {
  registerAdmin(req: Request, res: Response): Promise<any>;
  login(req: Request, res: Response): Promise<any>;
  requestReset(req: Request, res: Response): Promise<any>;
  resetPassword(req: Request, res: Response): Promise<any>;
}

export class AuthController implements IAuthController {
  constructor(private authService: AuthService) {}

  registerAdmin = async (req: Request, res: Response) => {
    console.log('Payload received:', req.body);
    const result = await this.authService.registerAdmin(req.body);
    successResponse(res, "Register admin successfully", result);
  };

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
        data: null,
      });
    }

    const result = await this.authService.login({ email, password });
    successResponse(res, "Login successfully", result);
  };

  requestReset = async (req: Request, res: Response) => {
  const { email } = req.body;

  // validasi field tetap di validator
  const result = await this.authService.requestReset(email);

  if (!result.success) {
    return res.status(400).json({
      success: false,
      message: result.message,
      data: null
    });
  }

  successResponse(res, "Request reset password successfully", null);
};

  resetPassword = async (req: Request, res: Response) => {
  const { email, otp, password } = req.body;

  if (!email || !otp || !password) {
    throw new Error("Email, OTP, dan password wajib diisi");
  }

  const user = await this.authService.findUserByEmail(email);
  await this.authService.resetPassword(user.id, otp, password);

  successResponse(res, "Password reset successfully", null);
};

}
