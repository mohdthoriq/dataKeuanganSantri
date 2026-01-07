import type { Request, Response } from "express";
import { EmailVerificationService } from "../services/emailVerification.service";
import { successResponse } from "../utils/response";

export class EmailVerificationController {
    constructor(private emailVerificationService: EmailVerificationService) {}

  async requestOtp(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) throw new Error("Unauthorized");

    const otp = await this.emailVerificationService.requestOtp(userId);
    successResponse(res, "OTP generated successfully", otp);
  }

  async verifyOtp(req: Request, res: Response) {
    const userId = req.user?.id;
    const { otpCode } = req.body;

    if (!userId) throw new Error("Unauthorized");
    if (!otpCode) throw new Error("OTP code is required");

    const result = await this.emailVerificationService.verifyOtp(userId, otpCode);
    successResponse(res, "OTP verified successfully", result);
  }

  async resendOtp(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) throw new Error("Unauthorized");

    const otp = await this.emailVerificationService.resendOtp(userId);
    successResponse(res, "OTP resent successfully", otp);
  }

  async getActiveOtp(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) throw new Error("Unauthorized");

    const otp = await this.emailVerificationService.getActiveOtp(userId);
    successResponse(res, "Active OTP retrieved", otp);
  }
}
