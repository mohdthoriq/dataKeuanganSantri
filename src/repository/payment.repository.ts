import type { PaymentStatus } from "generated";
import type { Prisma, PrismaClient } from "../database";

export interface ICreatePaymentTransactionPayload {
    santriId: string;
    categoryId: string;
    amount: Prisma.Decimal | number;
    orderId: string;
    createdBy: string;
}

export class PaymentRepository {
    constructor(private prisma: PrismaClient) { }

    async findByOrderId(orderId: string) {
        return this.prisma.payment.findUnique({
            where: { orderId },
        });
    }

    createPayment(payload: {
        invoiceId: string;
        orderId: string;
        amount: Prisma.Decimal | number;
    }) {
        return this.prisma.payment.create({
            data: {
                invoiceId: payload.invoiceId,
                orderId: payload.orderId,
                amount: payload.amount,
                status: "PENDING",
                gateway: "MIDTRANS",
            },
        });
    }

    async updatePaymentStatus(payload: {
        orderId: string;
        status: PaymentStatus;
        method?: string;
    }) {
        return this.prisma.payment.update({
            where: { orderId: payload.orderId },
            data: {
                status: payload.status,
                ...(payload.method && {
                    method: payload.method,
                }),
            },
        });
    }
}