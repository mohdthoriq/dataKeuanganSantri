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
 *   - name: EmailVerification
 *     description: "Request & verifikasi OTP via email"
 */

/**
 * @swagger
 * /api/email-verification/request-otp:
 *   post:
 *     summary: Request OTP
 *     description: Mengirim OTP ke email untuk verifikasi email atau reset password
 *     tags: [EmailVerification]
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
 *                 format: email
 *                 example: admin@example.com
 *                 description: Email penerima OTP
 *               purpose:
 *                 type: string
 *                 enum:
 *                   - email_verification
 *                   - password_reset
 *                 example: email_verification
 *                 description: Tujuan pengiriman OTP
 *     responses:
 *       200:
 *         description: OTP berhasil dikirim
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: OTP sent successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     email:
 *                       type: string
 *                       example: admin@example.com
 *                     purpose:
 *                       type: string
 *                       example: email_verification
 *                     expiresAt:
 *                       type: string
 *                       format: date-time
 *                       example: "2026-01-10T10:30:00.000Z"
 *       400:
 *         description: Request tidak valid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Email is required
 *       429:
 *         description: Terlalu banyak request OTP
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Too many OTP requests
 *                 retryAfter:
 *                   type: integer
 *                   example: 300
 *       500:
 *         description: Gagal mengirim OTP
 */

/**
 * @swagger
 * /api/email-verification/verify-otp:
 *   post:
 *     summary: Verifikasi OTP
 *     description: Memverifikasi kode OTP yang dikirim ke email
 *     tags: [EmailVerification]
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
 *                 format: email
 *                 example: admin@example.com
 *               otp:
 *                 type: string
 *                 example: "123456"
 *                 description: Kode OTP 6 digit
 *     responses:
 *       200:
 *         description: OTP berhasil diverifikasi
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: OTP verified successfully
 *       400:
 *         description: OTP tidak valid atau expired
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: Invalid or expired OTP
 */

router.post("/request-otp", validate(requestOtpValidation), controller.requestOtp);
router.post("/verify-otp", validate(verifyOtpValidation), controller.verifyOtp);

export default router;