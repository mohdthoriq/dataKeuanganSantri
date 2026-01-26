// invoice.service.ts
import type { InvoiceRepository } from "../repository/invoice.repository";

export class InvoiceService {
  constructor(private invoiceRepo: InvoiceRepository) { }

  async createInvoice(payload: {
    userId: string;
    santriId: string;
    categoryId: string;
    amount: number;
    description?: string;
  }) {
    return await this.invoiceRepo.create({
      user: {
        connect: { id: payload.userId },
      },
      santri: {
        connect: { id: payload.santriId },
      },
      category: {
        connect: { id: payload.categoryId },
      },
      description: payload.description ?? null,
      totalAmount: payload.amount,
      paidAmount: 0,
      status: "UNPAID",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    });
  }

  async getUserInvoices(userId: string) {
    return this.invoiceRepo.findByUser(userId);
  }

  async getInvoiceDetail(invoiceId: string, userId: string) {
    const invoice = await this.invoiceRepo.findById(invoiceId);

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    if (invoice.userId !== userId) {
      throw new Error("Forbidden");
    }

    return invoice;
  }
}

