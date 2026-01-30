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
import { authenticate } from "../middlewares/auth.middleware";

const router = Router();

const repo = new AuthRepository(PrismaInstance);
const service = new AuthService(repo);
const controller = new AuthController(service);

const evRepo = new EmailVerificationRepository(PrismaInstance);
const evService = new EmailVerificationService(evRepo, PrismaInstance);
const evController = new EmailVerificationController(evService);

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Manajemen Login dan Register
 */

/**
 * @swagger
 * /api/auth/register-admin:
 *   post:
 *     summary: Register admin baru
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *               - institution
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin01
 *               email:
 *                 type: string
 *                 example: admin@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *               institution:
 *                 type: string
 *                 example: Pondok Pesantren Al-Hikmah
 *     responses:
 *       201:
 *         description: Admin berhasil didaftarkan
 *       400:
 *         description: Validasi gagal
 */
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login admin
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Login berhasil
 *       401:
 *         description: Email atau password salah
 */
/**
 * @swagger
 * /api/auth/request-reset:
 *   post:
 *     summary: Request reset password
 *     tags:
 *       - Auth
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
 *                 example: admin@gmail.com
 *     responses:
 *       200:
 *         description: Link reset password dikirim
 *       404:
 *         description: Email tidak ditemukan
 */
/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset password menggunakan token
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - newPassword
 *             properties:
 *               token:
 *                 type: string
 *                 example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
 *               newPassword:
 *                 type: string
 *                 example: newPassword123
 *     responses:
 *       200:
 *         description: Password berhasil direset
 *       400:
 *         description: Token tidak valid atau kadaluarsa
 */


router.post("/register-admin", validate(registerAdminValidation), controller.registerAdmin);
router.post("/login", validate(loginValidation), controller.login);
router.post("/resend-otp", validate(requestOtpValidation), evController.resendOtpPublic);

router.post("/request-reset", validate(requestResetValidation), controller.requestReset);
router.post("/reset-password", validate(resetPasswordValidation), controller.resetPassword);
router.patch("/change-password", authenticate, controller.changePassword);


export default router;