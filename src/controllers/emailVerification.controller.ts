import type { Request, Response } from "express";
import { EmailVerificationService } from "../services/emailVerification.service";
import { successResponse } from "../utils/response";

export class EmailVerificationController {
    constructor(private emailVerificationService: EmailVerificationService) {}

  requestOtp = async(req: Request, res: Response) => {
    const {email} = req.body
    if (!email) throw new Error("Email is required");
    const otp = await this.emailVerificationService.requestOtp(email);
    successResponse(res, "OTP generated successfully", otp);
  }

  verifyOtp = async (req: Request, res: Response) => {
    const { email, otp } = req.body;

    if (!otp) throw new Error("OTP code is required");

    const result = await this.emailVerificationService.verifyOtpByEmail(email, otp);
    successResponse(res, "OTP verified successfully", result);
  }

  // async resendOtp(req: Request, res: Response) {
  //   const userId = req.user?.id;
  //   if (!userId) throw new Error("Unauthorized");

  //   const otp = await this.emailVerificationService.resendOtp(userId);
  //   successResponse(res, "OTP resent successfully", otp);
  // }

  async getActiveOtp(req: Request, res: Response) {
    const userId = req.user?.id;
    if (!userId) throw new Error("Unauthorized");

    const otp = await this.emailVerificationService.getActiveOtp(userId);
    successResponse(res, "Active OTP retrieved", otp);
  }
}
