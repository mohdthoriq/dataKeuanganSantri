import { Router } from "express";
import { authenticate } from "../middlewares/auth.middlleware";
import { EmailVerificationRepository } from "../repository/emailVerification.repository";
import PrismaInstance from "../database";
import { EmailVerificationService } from "../services/emailVerification.service";
import { EmailVerificationController } from "../controllers/emailVerification.controller";
import { validate } from "../utils/validator";
import { requestOtpValidation, verifyOtpValidation } from "../validations/emailVerification.validation";

const router = Router();

const repo = new EmailVerificationRepository(PrismaInstance)
const service = new EmailVerificationService(repo, PrismaInstance)
const controller = new EmailVerificationController(service)

router.post("/request-otp", validate(requestOtpValidation), controller.requestOtp);
router.post("/verify-otp", validate(verifyOtpValidation), controller.verifyOtp);

export default router;