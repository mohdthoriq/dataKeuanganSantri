// invoice.service.ts
import type { InvoiceRepository } from "../repository/invoice.repository";
import type { Prisma } from "../database"

export class InvoiceService {
  constructor(private invoiceRepo: InvoiceRepository) { }

  async createInvoice(payload: {
    userId: string;
    santriId: string;
    categoryId?: string;
    amount: number;
    description?: string;
  }) {
    const data: Prisma.InvoiceCreateInput = {
      user: {
        connect: { id: payload.userId },
      },
      santri: {
        connect: { id: payload.santriId },
      },
      totalAmount: payload.amount,
      paidAmount: 0,
      status: "UNPAID",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      description: payload.description ?? null,
    };

    if (payload.categoryId) {
      data.category = {
        connect: { id: payload.categoryId },
      };
    }

    return this.invoiceRepo.create(data);
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

