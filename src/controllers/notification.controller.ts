import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { NotificationService } from "../services/notification.service";

export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  getMyNotifications = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const notifications = await this.notificationService.getNotifications(userId);
    successResponse(res, "Notifications fetched", notifications);
  };

  readNotification = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    if (isNaN(id)) throw new Error("Invalid notification ID");

    const notification = await this.notificationService.markAsRead(id);
    successResponse(res, "Notification marked as read", notification);
  };

  readAllNotifications = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    await this.notificationService.markAllAsRead(userId);
    successResponse(res, "All notifications marked as read");
  };
}
