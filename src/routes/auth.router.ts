import { Router } from "express";
import PrismaInstance from "../database";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { AuthRepository } from "../repository/auth.repository";
import { EmailVerificationRepository } from "../repository/emailVerification.repository";
import { EmailVerificationService } from "../services/emailVerification.service";
import { EmailVerificationController } from "../controllers/emailVerification.controller";
import { validate } from "../utils/validator";
import { loginValidation, registerAdminValidation, requestResetValidation, resetPasswordValidation } from "../validations/auth.validation";
import { requestOtpValidation } from "../validations/emailVerification.validation";

const router = Router();

const repo = new AuthRepository(PrismaInstance);
const service = new AuthService(repo);
const controller = new AuthController(service);

const evRepo = new EmailVerificationRepository(PrismaInstance);
const evService = new EmailVerificationService(evRepo, PrismaInstance);
const evController = new EmailVerificationController(evService);

router.post("/register-admin", validate(registerAdminValidation), controller.registerAdmin);
router.post("/login", validate(loginValidation), controller.login);
router.post("/resend-otp", validate(requestOtpValidation), evController.resendOtpPublic);

router.post("/request-reset", validate(requestResetValidation), controller.requestReset);
router.post("/reset-password", validate(resetPasswordValidation), controller.resetPassword);


export default router;