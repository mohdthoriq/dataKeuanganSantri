import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { NotificationService } from "../services/notification.service";
import type { INotificationListParams } from "../repository/notification.repository";

export class NotificationController {
  constructor(private notificationService: NotificationService) { }

  getMyNotifications = async (req: Request, res: Response) => {
    const userId = req.user!.id;
    const { page, limit, sortBy, order } = req.query;

    const params: INotificationListParams = {
      userId,
      ...(page && { page: Number(page) }),
      ...(limit && { limit: Number(limit) }),
      ...(sortBy && { sortBy: sortBy as string }),
      ...(order && { order: order as "asc" | "desc" }),
    };

    const result = await this.notificationService.getNotifications(params);
    successResponse(res, "Notifications fetched", result.data, result.meta);
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
