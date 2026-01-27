import type { InvoiceRepository } from "../repository/invoice.repository";
import type { SantriRepository } from "../repository/santri.repository";
import type { Prisma, Users } from "../database"

export class InvoiceService {
  constructor(
    private invoiceRepo: InvoiceRepository,
    private santriRepo: SantriRepository
  ) { }

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
      totalAmount: Number(payload.amount),
      paidAmount: 0,
      status: "UNPAID",
      dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      description: payload.description ?? null,
    };

    if (payload.categoryId && typeof payload.categoryId === 'string' && payload.categoryId.trim() !== '') {
      data.category = {
        connect: { id: payload.categoryId },
      };
    }

    return this.invoiceRepo.create(data);
  }


  async getUserInvoices(user: { id: string; role: string }) {
    if (user.role === 'WALI_SANTRI') {
      const santriList = await this.santriRepo.getByWali(user.id);
      const santriIds = santriList.map(s => s.id);

      if (santriIds.length === 0) return [];

      return this.invoiceRepo.findBySantriIds(santriIds);
    }

    return this.invoiceRepo.findByUser(user.id);
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

