import { PaymentController } from "controllers/payment.controller";
import PrismaInstance from "database";
import { Router } from "express";
import { authenticate } from "middlewares/auth.middlleware";
import { InvoiceRepository } from "repository/invoice.repository";
import { PaymentRepository } from "repository/payment.repository";
import { PaymentService } from "services/payment.service";

const router = Router();

const repo = new PaymentRepository(PrismaInstance);
const invoiceRepo = new InvoiceRepository(PrismaInstance)
const service = new PaymentService(repo, invoiceRepo);
const controller = new PaymentController(service);

router.post("/", authenticate, controller.createPayment);

router.post("/webhook", controller.handleWebhook);

router.get("/status/:orderId", authenticate, controller.getPaymentStatus);

export default router;