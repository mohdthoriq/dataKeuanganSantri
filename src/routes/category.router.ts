// src/routes/category.router.ts
import Router from "express";
import { CategoryRepository } from "../repository/category.repository";
import PrismaInstance from "../database";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "../controllers/category.controller";
import { authenticate } from "../middlewares/auth.middlleware";

const router = Router();

const repo = new CategoryRepository(PrismaInstance)
const service = new CategoryService(repo)
const controller = new CategoryController(service)

/**
 * @swagger
 * tags:
 *   - name: Category
 *     description: Manajemen kategori
 */

/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Buat kategori baru (Admin)
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
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
 *                 example: Buku Agama
 *                 description: Nama kategori
 *     responses:
 *       201:
 *         description: Kategori berhasil dibuat
 *       400:
 *         description: Data tidak valid
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Ambil daftar kategori
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: santri
 *         schema:
 *           type: string
 *         description: Filter kategori berdasarkan santri
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter kategori berdasarkan tanggal
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter kategori berdasarkan nama
 *     responses:
 *       200:
 *         description: Daftar kategori berhasil diambil
 */

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: Ambil kategori berdasarkan ID
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID kategori
 *     responses:
 *       200:
 *         description: Kategori berhasil diambil
 *       404:
 *         description: Kategori tidak ditemukan
 */

/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Update kategori berdasarkan ID
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID kategori
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Buku Umum
 *     responses:
 *       200:
 *         description: Kategori berhasil diupdate
 */

/**
 * @swagger
 * /api/category/{id}/status:
 *   patch:
 *     summary: Update status kategori (aktif/nonaktif)
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID kategori
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: boolean
 *                 example: true
 *                 description: Status kategori
 *     responses:
 *       200:
 *         description: Status kategori berhasil diupdate
 */

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Hapus kategori berdasarkan ID
 *     tags: [Category]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID kategori
 *     responses:
 *       200:
 *         description: Kategori berhasil dihapus
 *       404:
 *         description: Kategori tidak ditemukan
 */

router.post("/", authenticate, controller.createCategory) // admin input 
router.get("/",  authenticate ,controller.getCategories) // filter: santri, date, category
router.get("/:id", controller.getCategoryById) // get by id
router.put("/:id", controller.updateCategory) // update by id
router.patch("/:id/status", controller.updateCategoryStatus) // update status by id
router.delete("/:id", controller.deleteCategory) // delete by id

export default router
