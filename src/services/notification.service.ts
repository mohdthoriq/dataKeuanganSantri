import type { Notification } from "../generated";
import type { INotificationRepository } from "../repository/notification.repository";

export class NotificationService {
  constructor(private notificationRepo: INotificationRepository) {}

  getNotifications(userId: number): Promise<Notification[]> {
    return this.notificationRepo.getAll(userId);
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
