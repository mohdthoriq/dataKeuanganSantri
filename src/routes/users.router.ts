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
 *   name: Users
 *   description: Manajemen user/admin
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     tags:
 *       - User
 *     responses:
 *       200:
 *         description: List semua user
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: User ID
 *     responses:
 *       200:
 *         description: Detail user
 *       404:
 *         description: User tidak ditemukan
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create new user
 *     tags:
 *       - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - email
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: admin01
 *               email:
 *                 type: string
 *                 example: admin@gmail.com
 *               password:
 *                 type: string
 *                 example: password123
 *               role:
 *                 type: string
 *                 example: admin
 *     responses:
 *       201:
 *         description: User berhasil dibuat
 *       400:
 *         description: Validasi gagal
 */

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update user by ID
 *     tags:
 *       - User
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
 *               username:
 *                 type: string
 *                 example: adminUpdated
 *               email:
 *                 type: string
 *                 example: adminupdated@gmail.com
 *               role:
 *                 type: string
 *                 example: admin
 *     responses:
 *       200:
 *         description: User berhasil diupdate
 *       404:
 *         description: User tidak ditemukan
 */

/**
 * @swagger
 * /api/users/{id}/status:
 *   patch:
 *     summary: Update status user (aktif/non-aktif)
 *     tags:
 *       - User
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
 *         description: Status user berhasil diupdate
 *       404:
 *         description: User tidak ditemukan
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user by ID
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
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