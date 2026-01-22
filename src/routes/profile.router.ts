import { Router } from "express";
import PrismaInstance from "../database";
import { ProfileRepository } from "../repository/profile.repository";
import { ProfileService } from "../services/profile.service";
import { ProfileController } from "../controllers/profile.controller";
import { authenticate } from "../middlewares/auth.middleware";
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
 *   name: Profile
 *   description: Manajemen profile pengguna
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   get:
 *     summary: Get profile by ID
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Profile ID
 *     responses:
 *       200:
 *         description: Detail profile
 *       404:
 *         description: Profile tidak ditemukan
 */

/**
 * @swagger
 * /api/profile:
 *   post:
 *     summary: Create profile
 *     tags:
 *       - Profile
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
 *               - gender
 *               - address
 *               - profile_picture
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ahmad Fadli
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *                 example: male
 *               address:
 *                 type: string
 *                 example: Jl. Merdeka No.10
 *               profile_picture:
 *                 type: string
 *                 format: binary
 *                 description: Upload file gambar profile
 *     responses:
 *       201:
 *         description: Profile berhasil dibuat
 *       400:
 *         description: Validasi gagal
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   put:
 *     summary: Update profile by ID
 *     tags:
 *       - Profile
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ahmad Fadli Updated
 *               gender:
 *                 type: string
 *                 enum: [male, female, other]
 *                 example: female
 *               address:
 *                 type: string
 *                 example: Jl. Kemerdekaan No.5
 *               profile_picture:
 *                 type: string
 *                 format: binary
 *                 description: Upload file gambar profile (opsional)
 *     responses:
 *       200:
 *         description: Profile berhasil diupdate
 *       404:
 *         description: Profile tidak ditemukan
 */

/**
 * @swagger
 * /api/profile/{id}:
 *   delete:
 *     summary: Delete profile by ID
 *     tags:
 *       - Profile
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Profile ID
 *     responses:
 *       200:
 *         description: Profile berhasil dihapus
 *       404:
 *         description: Profile tidak ditemukan
 */

router.get('/:id', validate(getProfileByIdValidation), controller.getProfileById)
router.post('/', authenticate, upload.single('profile_picture'), validate(createProfileValidation), controller.createProfile)
router.put("/:id", authenticate, upload.single("profile_picture"), validate(updateProfileValidation), controller.updateProfile);
router.delete('/:id', controller.deleteProfile)

export default router