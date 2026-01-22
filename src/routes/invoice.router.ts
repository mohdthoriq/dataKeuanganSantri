import { InvoiceController } from "controllers/invoice.controller";
import PrismaInstance from "database";
import { Router } from "express";
import { InvoiceRepository } from "repository/invoice.repository";
import { SubscriptionPlanRepository } from "repository/subscriptionPlan.repository";
import { InvoiceService } from "services/invoice.service";

const router = Router()

const repo = new InvoiceRepository(PrismaInstance)
const subPlanRepo = new SubscriptionPlanRepository(PrismaInstance)
const service = new InvoiceService(repo, subPlanRepo)
const controller = new InvoiceController(service)

router.post("/", controller.createInvoice)

router.get("/", controller.getMyInvoices)

router.get("/:id", controller.getInvoiceDetail)

export default router