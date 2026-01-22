// userSubscription.controller.ts
import type { Request, Response } from "express";
import type { UserSubscriptionService } from "../services/usersubscription.service";
import { successResponse } from "utils/response";

export class UserSubscriptionController {
  constructor(private service: UserSubscriptionService) {}

  getMySubscription = async (req: Request, res: Response) => {
    const userId = req.user!.id;

    const sub = await this.service.getMySubscription(userId);

    successResponse(res, "Subscription fetched", sub);
  };
}
