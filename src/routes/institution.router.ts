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
 *   name: Institution
 *   description: Manajemen Institution
 */

/**
 * @swagger
 * /api/institution:
 *   post:
 *     summary: Create institution
 *     tags:
 *       - Institution
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *             properties:
 *               name:
 *                 type: string
 *                 example: Pondok Pesantren Al-Hikmah
 *               address:
 *                 type: string
 *                 example: Jl. Raya No.1, Jakarta
 *     responses:
 *       201:
 *         description: Institution berhasil dibuat
 *       400:
 *         description: Validasi gagal
 */

/**
 * @swagger
 * /api/institution/my:
 *   get:
 *     summary: Get institutions created by current user
 *     tags:
 *       - Institution
 *     responses:
 *       200:
 *         description: List institution milik user
 */

/**
 * @swagger
 * /api/institution/{id}:
 *   get:
 *     summary: Get institution by ID
 *     tags:
 *       - Institution
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Institution ID
 *     responses:
 *       200:
 *         description: Institution detail
 *       404:
 *         description: Institution tidak ditemukan
 */

/**
 * @swagger
 * /api/institution/{id}:
 *   put:
 *     summary: Update institution by ID
 *     tags:
 *       - Institution
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Pondok Pesantren Al-Hikmah Updated
 *               address:
 *                 type: string
 *                 example: Jl. Raya No.1, Jakarta Timur
 *     responses:
 *       200:
 *         description: Institution berhasil diupdate
 *       404:
 *         description: Institution tidak ditemukan
 */

/**
 * @swagger
 * /api/institution/{id}:
 *   delete:
 *     summary: Delete institution by ID
 *     tags:
 *       - Institution
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Institution berhasil dihapus
 *       404:
 *         description: Institution tidak ditemukan
 */


router.post("/",authenticate, validate(createInstitutionValidation), controller.createInstitution);
router.get("/my", controller.getInstitutionsByUser);
router.get("/:id", validate(institutionIdValidation), controller.getInstitutionById);
router.put("/:id", validate(updateInstitutionValidation), controller.updateInstitution);
router.delete("/:id", controller.deleteInstitution);


export default router;