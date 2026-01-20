import type { Notification } from "../database";
import type { INotificationRepository, INotificationListParams } from "../repository/notification.repository";
import type { IPaginatedResult } from "../types/common";

export class NotificationService {
  constructor(private notificationRepo: INotificationRepository) { }

  getNotifications(params: INotificationListParams): Promise<IPaginatedResult<Notification>> {
    return this.notificationRepo.getAll(params);
  }

  markAsRead(id: string): Promise<Notification> {
    return this.notificationRepo.markAsRead(id);
  }

  markAllAsRead(userId: string): Promise<void> {
    return this.notificationRepo.markAllAsRead(userId);
  }

  createNotification(userId: string, title: string, message: string): Promise<Notification> {
    return this.notificationRepo.create(userId, title, message);
  }
}
