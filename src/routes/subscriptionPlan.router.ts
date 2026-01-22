// subscriptionPlan.router.ts
import { Router } from "express";
import PrismaInstance from "../database";
import { SubscriptionPlanRepository } from "../repository/subscriptionPlan.repository";
import { SubscriptionPlanService } from "../services/subscriptionPlan.service";
import { SubscriptionPlanController } from "../controllers/subscriptionPlan.controller";

const router = Router();

const repo = new SubscriptionPlanRepository(PrismaInstance);
const service = new SubscriptionPlanService(repo);
const controller = new SubscriptionPlanController(service);

// ADMIN
router.post("/", controller.createPlan);
router.put("/:id",controller.updatePlan);
router.delete("/:id",controller.deletePlan);

// PUBLIC
router.get("/", controller.getPlans);
router.get("/:id", controller.getPlanDetail);

export default router;
