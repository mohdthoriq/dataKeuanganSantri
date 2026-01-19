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

/**
 * @swagger
 * tags:
 *   name: OTP
 *   description: Request dan verifikasi OTP
 */

/**
 * @swagger
 * /api/email-verification/request-otp:
 *   post:
 *     summary: Request OTP untuk login/verifikasi
 *     tags:
 *       - OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@gmail.com"
 *     responses:
 *       200:
 *         description: OTP berhasil dikirim
 *       400:
 *         description: Nomor HP tidak valid
 */

/**
 * @swagger
 * /api/email-verification/verify-otp:
 *   post:
 *     summary: Verifikasi OTP yang diterima
 *     tags:
 *       - OTP
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@gmail.com"
 *               otp:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: OTP berhasil diverifikasi
 *       400:
 *         description: OTP salah atau kadaluarsa
 */


router.post("/request-otp", validate(requestOtpValidation), controller.requestOtp);
router.post("/verify-otp", validate(verifyOtpValidation), controller.verifyOtp);

export default router;