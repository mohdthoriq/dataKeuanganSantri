// invoice.service.ts
import type { InvoiceRepository } from "../repository/invoice.repository";
import type { SubscriptionPlanRepository } from "../repository/subscriptionPlan.repository";


export class InvoiceService {
  constructor(private invoiceRepo: InvoiceRepository,
    private subscriptionPlanRepo: SubscriptionPlanRepository
  ) { }

  async createInvoice(payload: {
    userId: string;
    planId: string;
  }) {
    const plan = await this.subscriptionPlanRepo.findById(payload.planId);

    if (!plan) throw new Error("Plan not found");

    return await this.invoiceRepo.create({
      user: {
        connect: { id: payload.userId },
      },
      plan: {
        connect: { id: plan.id },
      },
      totalAmount: plan.price,
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

