// subscriptionPlan.controller.ts
import type { Request, Response } from "express";
import type { SubscriptionPlanService } from "../services/subscriptionPlan.service";
import { successResponse } from "../utils/response";

export class SubscriptionPlanController {
  constructor(private planService: SubscriptionPlanService) {}

  createPlan = async (req: Request, res: Response) => {
    const { name, price, interval, description } = req.body;

    const plan = await this.planService.createPlan({
      name,
      price,
      interval,
      description,
    });

    successResponse(res, "Plan created", plan);
  };

  getPlans = async (_req: Request, res: Response) => {
    const plans = await this.planService.getPlans();
    successResponse(res, "Plans retrieved", plans);
  };

  getPlanDetail = async (req: Request, res: Response) => {
    const plan = await this.planService.getPlanById(req.params.id as string);
    successResponse(res, "Plan detail", plan);
  };

  updatePlan = async (req: Request, res: Response) => {
    const plan = await this.planService.updatePlan(
      req.params.id as string,
      req.body
    );

    successResponse(res, "Plan updated", plan);
  };

  deletePlan = async (req: Request, res: Response) => {
    await this.planService.deletePlan(req.params.id as string);
    successResponse(res, "Plan disabled");
  };
}
