import { successResponse } from "../utils/response";
import * as authServices from "../services/auth.service";
import type { Request, Response } from "express";

export const registerAdmin = async (req: Request, res: Response) => {
    await authServices.registerAdmin(req.body);
    
    successResponse(
        res,
        "Register admin successfully",
        201
    );
}

export const userLogin = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const result = await authServices.login(email, password);

    successResponse(
        res,
        "Login successfully",
        result
    );
}

export const requestReset = async(req: Request, res: Response) => {
    const { email } = req.body;

    if (!email) throw new Error("Bad Request")

    await authServices.requestReset(email);

    successResponse(
        res,
        "Request reset successfully",
        200
    );
}

export const resetPassword = async(req: Request, res: Response) => {
    const { userId, otpCode, newPassword } = req.body;

    if (!userId || !otpCode || !newPassword) throw new Error("Bad Request")

    await authServices.resetPassword(userId, otpCode, newPassword);

    successResponse(
        res,
        "Reset password successfully",
        200
    );
}