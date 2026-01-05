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