// userSubscription.service.ts
import type { UserSubscriptionRepository } from "../repository/usersubscription.repository";
import type { SubscriptionPlanRepository } from "../repository/subscriptionPlan.repository";

export class UserSubscriptionService {
  constructor(
    private userSubRepo: UserSubscriptionRepository,
    private planRepo: SubscriptionPlanRepository
  ) {}

  async activateSubscription(payload: {
    userId: string;
    planId: string;
  }) {
    const plan = await this.planRepo.findById(payload.planId);
    if (!plan) throw new Error("Plan not found");

    const now = new Date();

    let endAt = new Date(now);

    if (plan.interval === "MONTHLY") {
      endAt.setMonth(endAt.getMonth() + 1);
    }

    if (plan.interval === "YEARLY") {
      endAt.setFullYear(endAt.getFullYear() + 1);
    }

    // matiin subscription lama
    await this.userSubRepo.deactivateByUser(payload.userId);

    // buat subscription baru
    return this.userSubRepo.create({
      userId: payload.userId,
      planId: payload.planId,
      startAt: now,
      endAt,
    });
  }

  getMySubscription(userId: string) {
    return this.userSubRepo.findActiveByUser(userId);
  }
}
