import { Router } from "express";
import PrismaInstance from "../database";
import { ProfileRepository } from "../repository/profile.repository";
import { ProfileService } from "../services/profile.service";
import { ProfileController } from "../controllers/profile.controller";
import { authenticate } from "../middlewares/auth.middlleware";
import { upload } from "../middlewares/upload.middleware";
import { validate } from "../utils/validator";
import { createProfileValidation, getProfileByIdValidation, updateProfileValidation } from "../validations/profile.validation";

const router = Router()

const repo = new ProfileRepository(PrismaInstance)
const service = new ProfileService(repo)
const controller = new ProfileController(service)

/**
 * @swagger
 * tags:
 *   - name: Profile
 *     description: Manajemen profil pengguna
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   get:
 *     summary: Ambil profil berdasarkan ID
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID profile
 *     responses:
 *       200:
 *         description: Profil berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     profile_picture_url:
 *                       type: string
 *       404:
 *         description: Profil tidak ditemukan
 */

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Membuat profil baru
 *     tags: [Profile]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               phone:
 *                 type: string
 *                 example: 08123456789
 *               profile_picture_url:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Profil berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     profile_picture_url:
 *                       type: string
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   put:
 *     summary: Update profil berdasarkan ID
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID profile
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Updated
 *               phone:
 *                 type: string
 *                 example: 08999999999
 *     responses:
 *       200:
 *         description: Profil berhasil diupdate
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   delete:
 *     summary: Hapus profil berdasarkan ID
 *     tags: [Profile]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID profile
 *     responses:
 *       200:
 *         description: Profil berhasil dihapus
 *       404:
 *         description: Profil tidak ditemukan
 */
router.get('/:id', validate(getProfileByIdValidation), controller.getProfileById)

router.post('/',authenticate, upload.single('profile_picture_url'), validate(createProfileValidation), controller.createProfile)

router.put('/:id',validate(updateProfileValidation), controller.updateProfile)

router.delete('/:id', controller.deleteProfile)

export default router