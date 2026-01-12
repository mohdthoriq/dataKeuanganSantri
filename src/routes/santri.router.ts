import { Router } from "express";
import PrismaInstance from "../database";
import { SantriRepository } from "../repository/santri.repository";
import { SantriService } from "../services/santri.service";
import { SantriController } from "../controllers/santri.controller";
import { validate } from "../utils/validator";
import { createSantriValidation, santriIdValidation, updateSantriValidation, waliIdValidation } from "../validations/santri.validation";

const router = Router();

const repo = new SantriRepository(PrismaInstance)
const service = new SantriService(repo)
const controller = new SantriController(service)

/**
 * @swagger
 * tags:
 *   - name: Santri
 *     description: Manajemen data santri dan wali
 */

/**
 * @swagger
 * /api/santri:
 *   post:
 *     summary: Buat data santri baru
 *     tags: [Santri]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ahmad Fauzi
 *               age:
 *                 type: integer
 *                 example: 12
 *               address:
 *                 type: string
 *                 example: Jl. Merdeka No. 10
 *               waliId:
 *                 type: string
 *                 example: "wali-123"
 *     responses:
 *       201:
 *         description: Santri berhasil dibuat
 *       400:
 *         description: Data tidak valid
 */

/**
 * @swagger
 * /api/santri:
 *   get:
 *     summary: Ambil daftar santri
 *     tags: [Santri]
 *     responses:
 *       200:
 *         description: Daftar santri berhasil diambil
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       age:
 *                         type: integer
 *                       address:
 *                         type: string
 *                       waliId:
 *                         type: string
 */

/**
 * @swagger
 * /api/santri/{id}:
 *   get:
 *     summary: Ambil data santri berdasarkan ID
 *     tags: [Santri]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID santri
 *     responses:
 *       200:
 *         description: Data santri berhasil diambil
 *       404:
 *         description: Santri tidak ditemukan
 */

/**
 * @swagger
 * /api/santri/{id}:
 *   put:
 *     summary: Update data santri berdasarkan ID
 *     tags: [Santri]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID santri
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Ahmad Fauzi Updated
 *               age:
 *                 type: integer
 *                 example: 13
 *               address:
 *                 type: string
 *                 example: Jl. Merdeka No. 11
 *               waliId:
 *                 type: string
 *                 example: "wali-123"
 *     responses:
 *       200:
 *         description: Data santri berhasil diupdate
 */

/**
 * @swagger
 * /api/santri/{id}:
 *   delete:
 *     summary: Hapus santri berdasarkan ID
 *     tags: [Santri]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID santri
 *     responses:
 *       200:
 *         description: Santri berhasil dihapus
 *       404:
 *         description: Santri tidak ditemukan
 */

/**
 * @swagger
 * /api/santri/wali/{id}:
 *   get:
 *     summary: Ambil data santri berdasarkan wali
 *     tags: [Santri]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID wali
 *     responses:
 *       200:
 *         description: Daftar santri berhasil diambil
 *       404:
 *         description: Wali tidak ditemukan atau tidak memiliki santri
 */

router.post("/", validate(createSantriValidation), controller.createSantri)
router.get("/", controller.getSantriList)
router.get("/:id", validate(santriIdValidation), controller.getSantriById)
router.put("/:id", validate(updateSantriValidation), controller.updateSantri)
router.delete("/:id", validate(santriIdValidation), controller.deleteSantri)
// ===== wali =====
router.get("/wali/:id", validate(waliIdValidation), controller.getSantriByWali)

export default router
