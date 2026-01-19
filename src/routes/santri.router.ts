import { Router } from "express";
import PrismaInstance from "../database";
import { SantriRepository } from "../repository/santri.repository";
import { SantriService } from "../services/santri.service";
import { SantriController } from "../controllers/santri.controller";
import { authenticate } from "../middlewares/auth.middlleware";
import { validate } from "../utils/validator";
import { createSantriValidation, santriIdValidation, updateSantriValidation } from "../validations/santri.validation";
import { InstitutionService } from "../services/institution.service";
import { InstitutionRepository } from "../repository/institution.repository";

const router = Router();

const repo = new SantriRepository(PrismaInstance)
const service = new SantriService(repo)
const institutionRepo = new InstitutionRepository(PrismaInstance)
const institutionService = new InstitutionService(institutionRepo)
const controller = new SantriController(service, institutionService)

/**
 * @swagger
 * tags:
 *   name: Santri
 *   description: Manajemen data Santri
 */

/**
 * @swagger
 * /api/santri:
 *   post:
 *     summary: Create Santri
 *     tags:
 *       - Santri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nis
 *               - fullname
 *               - kelas
 *               - gender
 *               - waliName
 *               - institutionName
 *             properties:
 *               nis:
 *                 type: string
 *                 example: "123456"
 *                 description: NIS harus 6–10 digit angka
 *               fullname:
 *                 type: string
 *                 example: Ahmad Fadli
 *               kelas:
 *                 type: string
 *                 example: 5A
 *               gender:
 *                 type: string
 *                 example: Laki-laki
 *                 enum: [Laki-laki, Perempuan]
 *               waliName:
 *                 type: string
 *                 example: Ayah Fadli
 *               institutionName:
 *                 type: string
 *                 example: SDIT Al-Fath
 *     responses:
 *       201:
 *         description: Santri berhasil dibuat
 *       400:
 *         description: Validasi gagal
 */

/**
 * @swagger
 * /api/santri:
 *   get:
 *     summary: Get list Santri
 *     tags:
 *       - Santri
 *     parameters:
 *       - in: query
 *         name: fullname
 *         schema:
 *           type: string
 *         description: Filter berdasarkan nama Santri
 *       - in: query
 *         name: waliName
 *         schema:
 *           type: string
 *         description: Filter berdasarkan nama wali
 *       - in: query
 *         name: institutionName
 *         schema:
 *           type: string
 *         description: Filter berdasarkan nama institusi
 *       - in: query
 *         name: gender
 *         schema:
 *           type: string
 *           enum: [Laki-laki, Perempuan]
 *         description: Filter berdasarkan gender
 *       - in: query
 *         name: kelas
 *         schema:
 *           type: string
 *         description: Filter berdasarkan kelas
 *     responses:
 *       200:
 *         description: List Santri
 */

/**
 * @swagger
 * /api/santri/{id}:
 *   get:
 *     summary: Get Santri by ID
 *     tags:
 *       - Santri
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Santri ID (angka)
 *     responses:
 *       200:
 *         description: Detail Santri
 *       400:
 *         description: ID tidak valid
 *       404:
 *         description: Santri tidak ditemukan
 */

/**
 * @swagger
 * /api/santri/{id}:
 *   put:
 *     summary: Update Santri by ID
 *     tags:
 *       - Santri
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Santri ID (angka)
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nis:
 *                 type: string
 *                 example: "654321"
 *                 description: NIS harus 6–10 digit angka
 *               fullname:
 *                 type: string
 *                 example: Ahmad Fadli Updated
 *               kelas:
 *                 type: string
 *                 example: 6B
 *               gender:
 *                 type: string
 *                 example: Perempuan
 *                 enum: [Laki-laki, Perempuan]
 *               waliName:
 *                 type: string
 *                 example: Ayah Fadli Updated
 *               institutionName:
 *                 type: string
 *                 example: SDIT Al-Fath Updated
 *     responses:
 *       200:
 *         description: Santri berhasil diupdate
 *       400:
 *         description: Validasi gagal
 *       404:
 *         description: Santri tidak ditemukan
 */

/**
 * @swagger
 * /api/santri/{id}:
 *   delete:
 *     summary: Delete Santri by ID
 *     tags:
 *       - Santri
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Santri ID (angka)
 *     responses:
 *       200:
 *         description: Santri berhasil dihapus
 *       400:
 *         description: ID tidak valid
 *       404:
 *         description: Santri tidak ditemukan
 */

/**
 * @swagger
 * /api/santri/wali/{id}:
 *   get:
 *     summary: Get Santri by Wali ID
 *     tags:
 *       - Santri
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: Wali ID (angka)
 *     responses:
 *       200:
 *         description: List Santri milik wali tersebut
 *       400:
 *         description: ID tidak valid
 *       404:
 *         description: Wali tidak ditemukan
 */

router.post("/", validate(createSantriValidation), controller.createSantri)
router.get("/", controller.getSantriList)
router.get("/:id", validate(santriIdValidation), controller.getSantriById)
router.put("/:id", validate(updateSantriValidation), controller.updateSantri)
router.delete("/:id", validate(santriIdValidation), controller.deleteSantri)
// ===== wali =====
router.get("/wali/:id", controller.getSantriByWali)

export default router