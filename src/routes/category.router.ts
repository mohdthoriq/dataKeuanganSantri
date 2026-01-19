// src/routes/category.router.ts
import Router from "express";
import { CategoryRepository } from "../repository/category.repository";
import PrismaInstance from "../database";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "../controllers/category.controller";

const router = Router();

const repo = new CategoryRepository(PrismaInstance)
const service = new CategoryService(repo)
const controller = new CategoryController(service)

/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Manajemen Category
 */

/**
 * @swagger
 * /api/category:
 *   post:
 *     summary: Create category (Admin)
 *     tags:
 *       - Category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - type
 *               - institutionId
 *             properties:
 *               name:
 *                 type: string
 *                 example: SPP Bulanan
 *               type:
 *                 type: string
 *                 enum: [PEMASUKAN, PENGELUARAN]
 *                 example: PEMASUKAN
 *               institutionId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       201:
 *         description: Category berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: SPP Bulanan
 *                 type:
 *                   type: string
 *                   example: PEMASUKAN
 *                 institutionId:
 *                   type: integer
 *                   example: 1
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2026-01-13T10:00:00.000Z
 *       400:
 *         description: Validasi gagal
 */

/**
 * @swagger
 * /api/category:
 *   get:
 *     summary: Get list of categories
 *     tags:
 *       - Category
 *     parameters:
 *       - in: query
 *         name: santri
 *         schema:
 *           type: integer
 *         description: Filter by santri ID
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *           format: date
 *         description: Filter by date (YYYY-MM-DD)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category name
 *     responses:
 *       200:
 *         description: List categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: SPP Bulanan
 *                   type:
 *                     type: string
 *                     example: PEMASUKAN
 *                   institutionId:
 *                     type: integer
 *                     example: 1
 *                   isActive:
 *                     type: boolean
 *                     example: true
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2026-01-13T10:00:00.000Z
 */

/**
 * @swagger
 * /api/category/{id}:
 *   get:
 *     summary: Get category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Category ID
 *     responses:
 *       200:
 *         description: Category detail
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: SPP Bulanan
 *                 type:
 *                   type: string
 *                   example: PEMASUKAN
 *                 institutionId:
 *                   type: integer
 *                   example: 1
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2026-01-13T10:00:00.000Z
 *       404:
 *         description: Category tidak ditemukan
 */

/**
 * @swagger
 * /api/category/{id}:
 *   put:
 *     summary: Update category by ID
 *     tags:
 *       - Category
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
 *                 example: SPP Tahunan
 *               type:
 *                 type: string
 *                 enum: [PEMASUKAN, PENGELUARAN]
 *                 example: PEMASUKAN
 *               institutionId:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Category berhasil diupdate
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: SPP Tahunan
 *                 type:
 *                   type: string
 *                   example: PEMASUKAN
 *                 institutionId:
 *                   type: integer
 *                   example: 1
 *                 isActive:
 *                   type: boolean
 *                   example: true
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2026-01-13T10:00:00.000Z
 *       404:
 *         description: Category tidak ditemukan
 */

/**
 * @swagger
 * /api/category/{id}/status:
 *   patch:
 *     summary: Update category status
 *     tags:
 *       - Category
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
 *             required:
 *               - isActive
 *             properties:
 *               isActive:
 *                 type: boolean
 *                 example: false
 *     responses:
 *       200:
 *         description: Status category berhasil diubah
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 isActive:
 *                   type: boolean
 *                   example: false
 */

/**
 * @swagger
 * /api/category/{id}:
 *   delete:
 *     summary: Delete category by ID
 *     tags:
 *       - Category
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Category berhasil dihapus
 *       404:
 *         description: Category tidak ditemukan
 */

router.post("/", controller.createCategory) // admin input 
router.get("/", controller.getCategories) // filter: santri, date, category
router.get("/:id", controller.getCategoryById) // get by id
router.put("/:id", controller.updateCategory) // update by id
router.patch("/:id/status", controller.updateCategoryStatus) // update status by id
router.delete("/:id", controller.deleteCategory) // delete by id

export default router
