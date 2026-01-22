// subscriptionPlan.repository.ts
import type { PrismaClient, Prisma } from "../database";

export class SubscriptionPlanRepository {
  constructor(private prisma: PrismaClient) {}

  create(data: Prisma.SubscriptionPlanCreateInput) {
    return this.prisma.subscriptionPlan.create({ data });
  }

  findAllActive() {
    return this.prisma.subscriptionPlan.findMany({
      where: { isActive: true },
      orderBy: { price: "asc" },
    });
  }

  findById(id: string) {
    return this.prisma.subscriptionPlan.findUnique({
      where: { id },
    });
  }

  update(id: string, data: Prisma.SubscriptionPlanUpdateInput) {
    return this.prisma.subscriptionPlan.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return this.prisma.subscriptionPlan.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
