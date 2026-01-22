import { Router } from "express";
import PrismaInstance from "database";
import { UserSubscriptionController } from "controllers/userSubscription.controller";
import { SubscriptionPlanRepository } from "repository/subscriptionPlan.repository";
import { UserSubscriptionRepository } from "repository/usersubscription.repository";
import { UserSubscriptionService } from "services/usersubscription.service";

const router = Router()

const repo = new UserSubscriptionRepository(PrismaInstance)
const planRepo = new SubscriptionPlanRepository(PrismaInstance)
const service = new UserSubscriptionService(repo, planRepo)
const controller = new UserSubscriptionController(service)

router.get("/", controller.getMySubscription)

export default router