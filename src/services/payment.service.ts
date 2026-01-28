import type { InvoiceRepository } from "../repository/invoice.repository";
import midtransRepository from "../repository/midtrans.repository";
import type { PaymentRepository } from "../repository/payment.repository";
import { mapMidtransStatus, verifyMidtransSignature } from "../utils/midTrans";
import { NotificationUtil } from "../utils/notification.util";
import type { TransactionRepository } from "repository/transaction.repository";


export class PaymentService {
    constructor(private paymentRepo: PaymentRepository,
        private invoiceRepo: InvoiceRepository,
        private transactionRepo: TransactionRepository) { }

    async createPayment(payload: {
        invoiceId: string;
        userId: string;
    }) {
        const orderId = `ORDER-${Date.now()}`;

        const invoice = await this.invoiceRepo.findById(payload.invoiceId);

        if (!invoice) throw new Error("Invoice not found");

        const payment = await this.paymentRepo.createPayment({
            invoiceId: invoice.id,
            orderId,
            amount: Number(invoice.totalAmount) - Number(invoice.paidAmount),
        });

        const snapToken = await midtransRepository.createSnapToken({
            orderId,
            amount: Number(payment.amount),
        });

        return {
            paymentId: payment.id,
            orderId,
            snapToken,
        };
    }


    async handleWebhook(payload: {
        order_id: string;
        status_code: string;
        gross_amount: string;
        signature_key: string;
        transaction_status: string;
        payment_type: string;
    }) {
        const isValid = verifyMidtransSignature({
            order_id: payload.order_id,
            status_code: payload.status_code,
            gross_amount: payload.gross_amount,
            signature_key: payload.signature_key,
        });

        if (!isValid) {
            throw new Error("Invalid Midtrans signature");
        }

        const payment = await this.paymentRepo.findByOrderId(payload.order_id);

        if (!payment) {
            return { received: true };
        }

        const paymentStatus = mapMidtransStatus(payload.transaction_status);

        await this.paymentRepo.updatePaymentStatus({
            orderId: payload.order_id,
            status: paymentStatus,
            method: payload.payment_type,
        });

        if (paymentStatus !== "PAID") {
            return { received: true };
        }

        const invoice = await this.invoiceRepo.findById(payment.invoiceId);
        if (!invoice) throw new Error("Invoice not found");

        const newPaidAmount =
            invoice.paidAmount.toNumber() + Number(payload.gross_amount);

        let invoiceStatus: "UNPAID" | "PARTIAL" | "PAID" = "PARTIAL";

        if (newPaidAmount >= invoice.totalAmount.toNumber()) {
            invoiceStatus = "PAID";
        }

        await this.invoiceRepo.update(invoice.id, {
            paidAmount: newPaidAmount,
            status: invoiceStatus,
        });

        await this.transactionRepo.create({
            santriId: invoice.santriId!,
            categoryId: invoice.categoryId!,
            amount: Number(payload.gross_amount),
            type: "PEMASUKAN",
            description: `Pembayaran invoice ${invoice.id}`,
            transactionDate: new Date(),
            createdBy: invoice.userId,
        });

        NotificationUtil.notifyPaymentSuccess(
            invoice.userId,
            Number(payload.gross_amount),
            invoice.id
        ).catch(err => console.error(err));

        return { received: true };
    }

    async getPaymentStatus(orderId: string) {
        const payment = await this.paymentRepo.findByOrderId(orderId);

        if (!payment) {
            throw new Error("Payment not found");
        }

        const invoice = await this.invoiceRepo.findById(payment.invoiceId);

        if (!invoice) {
            throw new Error("Invoice not found");
        }

        return {
            orderId: payment.orderId,
            paymentStatus: payment.status,
            invoiceStatus: invoice.status,
            paidAmount: invoice.paidAmount,
            totalAmount: invoice.totalAmount,
        };
    }
}