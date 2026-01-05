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

export const verifyOtp = async(req: Request, res: Response) => {
    const { userId, otpCode } = req.body;

    await emailVerificationService.verifyOtp(userId, otpCode);

    successResponse(
        res,
        "Email verified successfully",
        200
    );
}

export const sendEmail = async (req: Request, res: Response) => {
    const { to, subject, text } = req.body;

    await emailVerificationService.sendEmail(to, subject, text);

    successResponse(
        res,
        "Email sent successfully",
        200
    );
}



