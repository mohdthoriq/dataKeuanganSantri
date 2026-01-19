import type { PrismaClient, Notification, Prisma } from "../database";
import type { IPaginatedResult, IPaginationParams } from "../types/common";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export interface INotificationListParams extends IPaginationParams {
  userId: number;
}

export interface INotificationRepository {
  getAll(params: INotificationListParams): Promise<IPaginatedResult<Notification>>;
  markAsRead(id: number): Promise<Notification>;
  markAllAsRead(userId: number): Promise<void>;
  create(userId: number, title: string, message: string): Promise<Notification>;
}

export class NotificationRepository implements INotificationRepository {
  constructor(private prisma: PrismaClient = prisma) { }

  async getAll(params: INotificationListParams): Promise<IPaginatedResult<Notification>> {
    const {
      userId,
      page = 1,
      limit = 10,
      sortBy,
      order = "desc",
    } = params;

    const skip = (page - 1) * limit;
    const where: Prisma.NotificationWhereInput = { userId };

    const orderBy: Prisma.NotificationOrderByWithRelationInput = {};
    if (sortBy === "title") {
      orderBy.title = order;
    } else {
      orderBy.createdAt = order;
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.notification.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      this.prisma.notification.count({ where }),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
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