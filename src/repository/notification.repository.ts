import type { PrismaClient, Notification } from "../database";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export interface INotificationRepository {
  getAll(userId: number): Promise<Notification[]>;
  markAsRead(id: number): Promise<Notification>;
  markAllAsRead(userId: number): Promise<void>;
  create(userId: number, title: string, message: string): Promise<Notification>;
}

export class NotificationRepository implements INotificationRepository {
  constructor(private prisma: PrismaClient = prisma) {}

  async getAll(userId: number): Promise<Notification[]> {
    return this.prisma.notification.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async markAsRead(id: number): Promise<Notification> {
    return this.prisma.notification.update({
      where: { id },
      data: { isRead: true },
    });
  }

  async markAllAsRead(userId: number): Promise<void> {
    await this.prisma.notification.updateMany({
      where: { userId, isRead: false },
      data: { isRead: true },
    });
  }

  async create(userId: number, title: string, message: string): Promise<Notification> {
    return this.prisma.notification.create({
      data: { userId, title, message },
    });
  }
}
