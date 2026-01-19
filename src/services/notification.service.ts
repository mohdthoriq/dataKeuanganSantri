import type { Notification } from "../database";
import type { INotificationRepository, INotificationListParams } from "../repository/notification.repository";
import type { IPaginatedResult, IPaginationParams } from "../types/common";

export class NotificationService {
  constructor(private notificationRepo: INotificationRepository) { }

  getNotifications(params: INotificationListParams): Promise<IPaginatedResult<Notification>> {
    return this.notificationRepo.getAll(params);
  }

  markAsRead(id: number): Promise<Notification> {
    return this.notificationRepo.markAsRead(id);
  }

  markAllAsRead(userId: number): Promise<void> {
    return this.notificationRepo.markAllAsRead(userId);
  }

  createNotification(userId: number, title: string, message: string): Promise<Notification> {
    return this.notificationRepo.create(userId, title, message);
  }
}
