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

router.get("/", controller.getMyNotifications);
router.patch("/:id/read", validate(notificationIdValidation), controller.readNotification);
router.patch("/read-all", controller.readAllNotifications);

export default router;