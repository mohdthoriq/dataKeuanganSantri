import type { Request, Response } from "express";
import * as emailVerificationService from "../services/emailVerification.service";
import { successResponse } from "../utils/response";

export const requestOtp = async (req: Request, res: Response) => {
    const { userId } = req.body;

    await emailVerificationService.generateOtp(userId);

    successResponse(
        res,
        "OTP sent successfully",
        200
    );
}

export const verifyOtp = async (req: Request, res: Response) => {
    const { userId, otpCode } = req.body;

    if (!userId || !otpCode) {
        throw new Error("Bad Request");
    }

    await emailVerificationService.verifyOtp(userId, otpCode);
    successResponse(
        res,
        "Email verified successfully",
        200
    );
}




