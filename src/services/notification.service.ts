import type { notification } from "../database";
import type { INotificationRepository, INotificationListParams } from "../repository/notification.repository";
import type { IPaginatedResult } from "../types/common";

export class NotificationService {
  constructor(private notificationRepo: INotificationRepository) { }

  getNotifications(params: INotificationListParams): Promise<IPaginatedResult<notification>> {
    return this.notificationRepo.getAll(params);
  }

  markAsRead(id: number): Promise<notification> {
    return this.notificationRepo.markAsRead(id);
  }

  markAllAsRead(userId: number): Promise<void> {
    return this.notificationRepo.markAllAsRead(userId);
  }

  createNotification(userId: number, title: string, message: string): Promise<notification> {
    return this.notificationRepo.create(userId, title, message);
  }
}
