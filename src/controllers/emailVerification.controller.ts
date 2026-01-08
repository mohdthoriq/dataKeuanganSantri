import type { Request, Response } from "express";
import { EmailVerificationService } from "../services/emailVerification.service";
import { successResponse } from "../utils/response";

export class EmailVerificationController {
  constructor(private emailVerificationService: EmailVerificationService) { }

  requestOtp = async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) throw new Error("Email required");

    const otp = await this.emailVerificationService.requestOtpByEmail(email);
    successResponse(res, "OTP generated", otp);
  }


  verifyOtp = async (req: Request, res: Response) => {
    const { email, otpCode } = req.body;

    if (!email || !otpCode) {
      throw new Error("Email & OTP required");
    }

    const result =
      await this.emailVerificationService.verifyOtpByEmail(
        email,
        otpCode
      );

    successResponse(res, "OTP verified successfully", result);
  };


  resendOtp = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) throw new Error("Unauthorized");

    const otp = await this.emailVerificationService.resendOtp(userId);
    successResponse(res, "OTP resent successfully", otp);
  }

  getActiveOtp = async (req: Request, res: Response) => {
    const userId = req.user?.id;
    if (!userId) throw new Error("Unauthorized");

    const otp = await this.emailVerificationService.getActiveOtp(userId);
    successResponse(res, "Active OTP retrieved", otp);
  }
}
