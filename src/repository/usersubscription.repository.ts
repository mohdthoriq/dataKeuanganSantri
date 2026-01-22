// userSubscription.repository.ts
import type { PrismaClient } from "../database";

export class UserSubscriptionRepository {
  constructor(private prisma: PrismaClient) {}

  findActiveByUser(userId: string) {
    return this.prisma.userSubscription.findFirst({
      where: {
        userId,
        isActive: true,
      },
      include: {
        plan: true,
      },
    });
  }

  deactivateByUser(userId: string) {
    return this.prisma.userSubscription.updateMany({
      where: {
        userId,
        isActive: true,
      },
      data: {
        isActive: false,
      },
    });
  }

  create(data: {
    userId: string;
    planId: string;
    startAt: Date;
    endAt: Date;
  }) {
    return this.prisma.userSubscription.create({
      data: {
        userId: data.userId,
        planId: data.planId,
        startAt: data.startAt,
        endAt: data.endAt,
        status: "ACTIVE",
        isActive: true,
      },
    });
  }
}
