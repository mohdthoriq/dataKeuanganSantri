import { Router } from "express";
import { InstitutionRepository } from "../repository/institution.repository";
import { InstitutionService } from "../services/institution.service";
import { InstitutionController } from "../controllers/institution.controller";
import PrismaInstance from "../database";
import { validate } from "../utils/validator";
import { createInstitutionValidation, institutionIdValidation, updateInstitutionValidation } from "../validations/institution.validation";
import { authenticate } from "../middlewares/auth.middlleware";

const router = Router();

const repo = new InstitutionRepository(PrismaInstance);
const service = new InstitutionService(repo);
const controller = new InstitutionController(service);

/**
 * @swagger
 * tags:
 *   - name: Institution
 *     description: Manajemen lembaga/institusi
 */

/**
 * @swagger
 * /api/institution:
 *   post:
 *     summary: Buat institusi baru
 *     tags: [Institution]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Masjid Al-Falah
 *                 description: Nama institusi
 *               address:
 *                 type: string
 *                 example: Jl. Merdeka No. 10
 *                 description: Alamat institusi
 *               phone:
 *                 type: string
 *                 example: "08123456789"
 *                 description: Nomor telepon institusi
 *     responses:
 *       201:
 *         description: Institusi berhasil dibuat
 *       400:
 *         description: Data tidak valid
 */

/**
 * @swagger
 * /api/institution/my:
 *   get:
 *     summary: Ambil daftar institusi milik user
 *     tags: [Institution]
 *     responses:
 *       200:
 *         description: Daftar institusi berhasil diambil
 */

/**
 * @swagger
 * /api/institution/{id}:
 *   get:
 *     summary: Ambil institusi berdasarkan ID
 *     tags: [Institution]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID institusi
 *     responses:
 *       200:
 *         description: Institusi berhasil diambil
 *       404:
 *         description: Institusi tidak ditemukan
 */

/**
 * @swagger
 * /api/institution/{id}:
 *   put:
 *     summary: Update institusi berdasarkan ID
 *     tags: [Institution]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID institusi
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Masjid Al-Falah Baru
 *               address:
 *                 type: string
 *                 example: Jl. Merdeka No. 11
 *               phone:
 *                 type: string
 *                 example: "08123456788"
 *     responses:
 *       200:
 *         description: Institusi berhasil diupdate
 */

/**
 * @swagger
 * /api/institution/{id}:
 *   delete:
 *     summary: Hapus institusi berdasarkan ID
 *     tags: [Institution]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID institusi
 *     responses:
 *       200:
 *         description: Institusi berhasil dihapus
 *       404:
 *         description: Institusi tidak ditemukan
 */

router.post("/", authenticate, validate(createInstitutionValidation), controller.createInstitution);
router.get("/my", controller.getInstitutionsByUser);
router.get("/:id", validate(institutionIdValidation), controller.getInstitutionById);
router.put("/:id", validate(updateInstitutionValidation), controller.updateInstitution);
router.delete("/:id", controller.deleteInstitution);


export default router;