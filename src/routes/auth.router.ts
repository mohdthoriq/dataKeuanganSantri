import { Router } from "express";
import PrismaInstance from "../database";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { AuthRepository } from "../repository/auth.repository";
import { validate } from "../utils/validator";
import { loginValidation, registerAdminValidation, requestResetValidation, resetPasswordValidation } from "../validations/auth.validation";

const router = Router();

const repo = new AuthRepository(PrismaInstance);
const service = new AuthService(repo);
const controller = new AuthController(service);

/**
 * @swagger
 * tags:
 *   - name: Auth
 *     description: Autentikasi dan manajemen admin
 */

/**
 * @swagger
 * /api/auth/register-admin:
 *   post:
 *     summary: Registrasi admin baru
 *     tags: [Auth]
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
 *                 example: admin123
 *                 description: Username untuk login admin
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *                 description: Email admin
 *               password:
 *                 type: string
 *                 example: password123
 *                 description: Password admin
 *               institution:
 *                 type: string
 *                 example: Masjid Al-Hikmah
 *                 description: Nama institusi atau masjid
 *     responses:
 *       201:
 *         description: Admin berhasil didaftarkan
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
 *                   example: Admin registered successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "64f8e1b9c2a1d3b456789012"
 *                     username:
 *                       type: string
 *                       example: admin123
 *                     email:
 *                       type: string
 *                       example: admin@example.com
 *                     institution:
 *                       type: string
 *                       example: Masjid Al-Hikmah
 *       400:
 *         description: Data yang dikirim tidak valid
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
 *                   example: Email already exists
 *       409:
 *         description: Konflik (email/username sudah ada)
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
 *                   example: Email already registered
 *       500:
 *         description: Server error
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
 *                   example: Internal server error
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login admin
 *     tags: [Auth]
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
 *                 format: email
 *                 example: admin@example.com
 *                 description: Email admin
 *               password:
 *                 type: string
 *                 format: password
 *                 example: password123
 *                 description: Password admin
 *     responses:
 *       200:
 *         description: Login berhasil
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
 *                   example: Login successful
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *                       description: JWT token untuk autentikasi
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "64f8e1b9c2a1d3b456789012"
 *                         username:
 *                           type: string
 *                           example: admin123
 *                         email:
 *                           type: string
 *                           example: admin@example.com
 *                         institution:
 *                           type: string
 *                           example: Masjid Al-Hikmah
 *                         role:
 *                           type: string
 *                           example: admin
 *       400:
 *         description: Data yang dikirim tidak valid
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
 *                   example: Email and password are required
 *       401:
 *         description: Autentikasi gagal
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
 *                   example: Invalid email or password
 *       404:
 *         description: User tidak ditemukan
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
 *                   example: User not found
 *       500:
 *         description: Server error
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
 *                   example: Internal server error
 */
/**
 * @swagger
 * /api/auth/request-reset:
 *   post:
 *     summary: Request reset password
 *     tags: [Auth]
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
 *                 description: Email admin untuk reset password
 *     responses:
 *       200:
 *         description: OTP reset password berhasil dikirim
 *       400:
 *         description: Email tidak valid atau tidak terdaftar
 *       429:
 *         description: Terlalu banyak request OTP
 *       500:
 *         description: Gagal mengirim OTP
 */

/**
 * @swagger
 * /api/auth/reset-password:
 *   post:
 *     summary: Reset password menggunakan OTP
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - otp
 *               - newPassword
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: admin@example.com
 *               otp:
 *                 type: string
 *                 example: "123456"
 *                 description: Kode OTP 6 digit
 *               newPassword:
 *                 type: string
 *                 example: NewPassword123!
 *                 description: Password baru
 *     responses:
 *       200:
 *         description: Password berhasil diubah
 *       400:
 *         description: OTP tidak valid atau kadaluarsa
 *       500:
 *         description: Gagal reset password
 */

router.post("/register-admin",validate(registerAdminValidation),controller.registerAdmin );
router.post("/login", validate(loginValidation),controller.login);
router.post("/request-reset", validate(requestResetValidation),controller.requestReset);
router.post("/reset-password", validate(resetPasswordValidation),controller.resetPassword);


export default router;
