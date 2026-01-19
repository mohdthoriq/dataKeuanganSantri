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
 *   name: Notification
 *   description: Manajemen notifikasi pengguna
 */

/**
 * @swagger
 * /api/notification:
 *   get:
 *     summary: Get all notifications for current user
 *     tags:
 *       - Notification
 *     responses:
 *       200:
 *         description: List notifikasi milik user
 */

/**
 * @swagger
 * /api/notification/{id}/read:
 *   patch:
 *     summary: Tandai satu notifikasi sebagai sudah dibaca
 *     tags:
 *       - Notification
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Notification ID
 *     responses:
 *       200:
 *         description: Notifikasi berhasil ditandai sebagai dibaca
 *       404:
 *         description: Notifikasi tidak ditemukan
 */

/**
 * @swagger
 * /api/notification/read-all:
 *   patch:
 *     summary: Tandai semua notifikasi sebagai sudah dibaca
 *     tags:
 *       - Notification
 *     responses:
 *       200:
 *         description: Semua notifikasi berhasil ditandai sebagai dibaca
 */


router.get("/", controller.getMyNotifications);
router.patch("/:id/read", validate(notificationIdValidation), controller.readNotification);
router.patch("/read-all", controller.readAllNotifications);

export default router;