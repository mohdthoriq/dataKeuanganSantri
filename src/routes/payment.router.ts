import { Router } from "express";
import PrismaInstance from "../database";
import { PaymentController } from "../controllers/payment.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { InvoiceRepository } from "../repository/invoice.repository";
import { PaymentRepository } from "../repository/payment.repository";
import { TransactionRepository } from "../repository/transaction.repository";
import { PaymentService } from "../services/payment.service";

const router = Router();

const repo = new PaymentRepository(PrismaInstance);
const invoiceRepo = new InvoiceRepository(PrismaInstance)
const transRepo = new TransactionRepository(PrismaInstance)
const service = new PaymentService(repo, invoiceRepo, transRepo);
const controller = new PaymentController(service);

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Manajemen Pembayaran
 */
router.post("/", authenticate, controller.createPayment);

router.post("/webhook", controller.handleWebhook);

router.get("/status/:orderId", authenticate, controller.getPaymentStatus);

export default router;