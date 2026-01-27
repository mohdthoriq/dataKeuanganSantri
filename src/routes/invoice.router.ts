import { InvoiceController } from "../controllers/invoice.controller";
import PrismaInstance from "../database";
import { Router } from "express";
import { InvoiceRepository } from "../repository/invoice.repository";
import { SantriRepository } from "../repository/santri.repository";
import { InvoiceService } from "../services/invoice.service";
import { validate } from "../utils/validator";
import { createInvoiceValidation } from "../validations/invoice.validation";

const router = Router()

const repo = new InvoiceRepository(PrismaInstance)
const santriRepo = new SantriRepository(PrismaInstance)
const service = new InvoiceService(repo, santriRepo)
const controller = new InvoiceController(service)

router.post("/", validate(createInvoiceValidation), controller.createInvoice)

router.get("/", controller.getMyInvoices)

router.get("/:id", controller.getInvoiceDetail)

export default router