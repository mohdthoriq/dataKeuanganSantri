// invoice.repository.ts
import type { Prisma, PrismaClient } from "../database";


export class InvoiceRepository {
  constructor(private prisma: PrismaClient) {}

  create(data: Prisma.InvoiceCreateInput) {
    return this.prisma.invoice.create({ data });
  }

  findByUser(userId: string) {
    return this.prisma.invoice.findMany({
      where: { userId },
    });
  }

  findDetail(id: string, userId: string) {
    return this.prisma.invoice.findFirst({
      where: { id, userId },
      include: { payments: true },
    });
  }

  findById(id: string) {
    return this.prisma.invoice.findUnique({
      where: { id },
      include: {
        payments: true,
      },
    });
  }

    update(id: string, data: Prisma.InvoiceUncheckedUpdateInput) {
    return this.prisma.invoice.update({
      where: { id },
      data,
    });
  }
}
