// invoice.controller.ts
import type { Request, Response } from "express";
import type { InvoiceService } from "../services/invoice.service";
import { successResponse } from "utils/response";

export class InvoiceController {
    constructor(private invoiceService: InvoiceService) { }

    createInvoice = async (req: Request, res: Response) => {
        const { planId } = req.body;
        const userId = req.user!.id;

        const invoice = await this.invoiceService.createInvoice({
            userId,
            planId,
        });

        successResponse(res, "Invoice created successfully", invoice);
    };

    getMyInvoices = async (req: Request, res: Response) => {
        const userId = req.user!.id;

        const invoices = await this.invoiceService.getUserInvoices(userId);

        successResponse(res, "Invoices retrieved successfully", invoices);
    };

    getInvoiceDetail = async (req: Request, res: Response) => {
        const userId = req.user!.id;
        const invoiceId = req.params.id;

        if (!invoiceId || Array.isArray(invoiceId)) {
            throw new Error("Invalid invoice id");
        }

        const invoice = await this.invoiceService.getInvoiceDetail(
            invoiceId,
            userId
        );

        successResponse(res, "Invoice retrieved successfully", invoice);
    };
}
