import type { PaymentService } from "../services/payment.service";
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import config from "../utils/env";

export class PaymentController {
    constructor(private paymentService: PaymentService) { }

    createPayment = async (req: Request, res: Response) => {
        const { invoiceId } = req.body;
        const userId = req.user!.id;

        if (!invoiceId) {
            throw new Error("invoiceId required");
        }

        const result = await this.paymentService.createPayment({
            invoiceId,
            userId,
        });

        successResponse(res, "Payment created successfully", result);
    };


    handleWebhook = async (req: Request, res: Response) => {
        console.log("WEBHOOK BODY:", req.body);
        const result = await this.paymentService.handleWebhook(req.body);
        successResponse(res, "Webhook handled successfully", result);
    }

    getPaymentStatus = async (req: Request, res: Response) => {
        const { orderId } = req.params;

        const result = await this.paymentService.getPaymentStatus(orderId as string);

        successResponse(res, "Payment status retrieved successfully", result);
    }
}