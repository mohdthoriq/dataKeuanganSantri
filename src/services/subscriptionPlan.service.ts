// subscriptionPlan.service.ts
import type { SubscriptionPlanRepository } from "../repository/subscriptionPlan.repository";

export class SubscriptionPlanService {
  constructor(private planRepo: SubscriptionPlanRepository) {}

  createPlan(payload: {
    name: string;
    price: number;
    interval: "MONTHLY" | "YEARLY";
    description?: string;
  }) {
    return this.planRepo.create({
      name: payload.name,
      price: payload.price,
      interval: payload.interval,
      description: payload.description ?? null,
    });
  }

  getPlans() {
    return this.planRepo.findAllActive();
  }

  getPlanById(id: string) {
    return this.planRepo.findById(id);
  }

  updatePlan(
    id: string,
    payload: {
      name?: string;
      price?: number;
      interval?: "MONTHLY" | "YEARLY";
      description?: string;
      isActive?: boolean;
    }
  ) {
    return this.planRepo.update(id, payload);
  }

  deletePlan(id: string) {
    return this.planRepo.delete(id);
  }
}
