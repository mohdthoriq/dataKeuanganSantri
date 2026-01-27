import { InvoiceController } from "../controllers/invoice.controller";
import PrismaInstance from "../database";
import { Router } from "express";
import { InvoiceRepository } from "../repository/invoice.repository";
import { InvoiceService } from "../services/invoice.service";

const router = Router()

const repo = new InvoiceRepository(PrismaInstance)
const service = new InvoiceService(repo)
const controller = new InvoiceController(service)

router.post("/", controller.createInvoice)

router.get("/", controller.getMyInvoices)

router.get("/:id", controller.getInvoiceDetail)

export default router