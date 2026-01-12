import { Router } from "express";
import * as notificationController from "../controllers/notification.controller";
import PrismaInstance from "../database";
import { NotificationRepository } from "../repository/notification.repository";
import { NotificationService } from "../services/notification.service";
import { validate } from "../utils/validator";
import { notificationIdValidation } from "../validations/notification.validation";

const router = Router();

const repo = new NotificationRepository(PrismaInstance)
const service = new NotificationService(repo)
const controller = new notificationController.NotificationController(service)

/**
 * @swagger
 * tags:
 *   - name: Notification
 *     description: Manajemen notifikasi pengguna
 */

/**
 * @swagger
 * /api/notification:
 *   get:
 *     summary: Ambil semua notifikasi user
 *     tags: [Notification]
 *     responses:
 *       200:
 *         description: Daftar notifikasi berhasil diambil
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
 *                       title:
 *                         type: string
 *                       message:
 *                         type: string
 *                       isRead:
 *                         type: boolean
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 */

/**
 * @swagger
 * /api/notification/{id}/read:
 *   patch:
 *     summary: Tandai notifikasi tertentu sebagai dibaca
 *     tags: [Notification]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID notifikasi
 *     responses:
 *       200:
 *         description: Notifikasi berhasil ditandai dibaca
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: Notification marked as read
 *       400:
 *         description: ID notifikasi tidak valid
 */

/**
 * @swagger
 * /api/notification/read-all:
 *   patch:
 *     summary: Tandai semua notifikasi sebagai dibaca
 *     tags: [Notification]
 *     responses:
 *       200:
 *         description: Semua notifikasi berhasil ditandai dibaca
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: All notifications marked as read
 */

router.get("/", controller.getMyNotifications);
router.patch("/:id/read", validate(notificationIdValidation), controller.readNotification);
router.patch("/read-all", controller.readAllNotifications);

export default router;