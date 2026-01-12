import { Router } from "express";
import PrismaInstance from "../database";
import { InstitutionProfileRepository } from "../repository/institutionProfile.repository";
import { InstitutionProfileService } from "../services/institutionProfile.service";
import { InstitutionProfileController } from "../controllers/institutionProfile.controller";
import { validate } from "../utils/validator";
import { profileInstitutionValidator } from "../validations/profileInstitution.validation";



const router = Router()

const repo = new InstitutionProfileRepository(PrismaInstance)
const service = new InstitutionProfileService(repo)
const controller = new InstitutionProfileController(service)

/**
 * @swagger
 * tags:
 *   name: ProfileInstitution
 *   description: Manajemen Profile Institution
 */

/**
 * @swagger
 * /api/profileinstitution:
 *   get:
 *     summary: Ambil data profile institution
 *     tags: [ProfileInstitution]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Data berhasil diambil
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
 *                     address:
 *                       type: string
 *                     phone:
 *                       type: string
 *                     email:
 *                       type: string
 *                     website:
 *                       type: string
 *                     logoUrl:
 *                       type: string
 *                     description:
 *                       type: string
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/profileinstitution:
 *   post:
 *     summary: Buat profile institution baru
 *     tags: [ProfileInstitution]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *                 example: Jl. Merdeka No.10
 *               phone:
 *                 type: string
 *                 example: "08123456789"
 *               email:
 *                 type: string
 *                 example: admin@pesantren.id
 *               website:
 *                 type: string
 *                 example: https://pesantren.id
 *               logoUrl:
 *                 type: string
 *                 example: https://pesantren.id/logo.png
 *               description:
 *                 type: string
 *                 example: Pesantren terbaik di kota
 *     responses:
 *       201:
 *         description: Profile institution berhasil dibuat
 *       400:
 *         description: Data tidak valid
 */

/**
 * @swagger
 * /api/profileinstitution:
 *   put:
 *     summary: Update profile institution
 *     tags: [ProfileInstitution]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               website:
 *                 type: string
 *               logoUrl:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Profile institution berhasil diupdate
 *       400:
 *         description: Data tidak valid
 *       404:
 *         description: Profile institution tidak ditemukan
 */

/**
 * @swagger
 * /api/profileinstitution:
 *   delete:
 *     summary: Hapus profile institution
 *     tags: [ProfileInstitution]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Profile institution berhasil dihapus
 *       404:
 *         description: Profile institution tidak ditemukan
 */


router.get("/",controller.getProfile )
router.post("/",validate(profileInstitutionValidator), controller.create)
router.put("/", validate(profileInstitutionValidator),controller.update)
router.delete("/", controller.delete)

export default router;