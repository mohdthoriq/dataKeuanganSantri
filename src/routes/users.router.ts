// src\routes\users.router.ts
import { Router } from "express";
import { UserRepository } from "../repository/users.repository";
import PrismaInstance from "../database";
import { UserService } from "../services/users.service";
import { UsersController } from "../controllers/users.controller";

const router = Router();

const repo = new UserRepository(PrismaInstance)
const service = new UserService(repo)
const controller = new UsersController(service)

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: Manajemen user / pengguna
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Ambil semua user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Daftar user berhasil diambil
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
 *                       email:
 *                         type: string
 *                       status:
 *                         type: boolean
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Ambil user berdasarkan ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID user
 *     responses:
 *       200:
 *         description: User berhasil diambil
 *       404:
 *         description: User tidak ditemukan
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Buat user baru
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "Password123!"
 *     responses:
 *       201:
 *         description: User berhasil dibuat
 *       400:
 *         description: Data tidak valid
 */

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user berdasarkan ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID user
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
 *               email:
 *                 type: string
 *                 example: john.updated@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "NewPassword123!"
 *     responses:
 *       200:
 *         description: User berhasil diupdate
 */

/**
 * @swagger
 * /api/users/{id}/status:
 *   patch:
 *     summary: Update status user (aktif/nonaktif)
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID user
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
 *                 description: Status user
 *     responses:
 *       200:
 *         description: Status user berhasil diupdate
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Hapus user berdasarkan ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID user
 *     responses:
 *       200:
 *         description: User berhasil dihapus
 *       404:
 *         description: User tidak ditemukan
 */

router.get("/", controller.getAllUsers)
router.get("/:id", controller.getUserById)
router.post("/", controller.createUser)
router.put("/:id", controller.updateUser)
router.patch("/:id/status", controller.updateUserStatus)
router.delete("/:id", controller.deleteUser)

export default router