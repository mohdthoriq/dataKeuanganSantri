// src/repository/stats.repository.ts
import type { PrismaClient } from "../database";

export class StatsRepository {
    constructor(private prisma: PrismaClient) { }

    async getSantriStats(institutionId: string) {
        const total = await this.prisma.santri.count({
            where: { institutionId },
        });

        const active = await this.prisma.santri.count({
            where: { institutionId, isActive: true },
        });

        return { total, active };
    }

    async getWaliStats(institutionId: string) {
        const total = await this.prisma.users.count({
            where: { institutionId, role: "WALI_SANTRI" },
        });

        const active = await this.prisma.users.count({
            where: { institutionId, role: "WALI_SANTRI", isActive: true },
        });

        const totalNonAktif = total - active;

        return {
            totalWali: total,
            totalAktif: active,
            totalNonAktif,
        };
    }

    async getTransactionStats(institutionId: string) {
        const transactions = await this.prisma.transaction.findMany({
            where: {
                santri: { institutionId },
                isDeleted: false,
            },
            select: {
                type: true,
                amount: true,
            },
        });

        let totalIncome = 0;
        let totalExpense = 0;

        transactions.forEach((t) => {
            const amount = Number(t.amount);
            if (t.type === "PEMASUKAN") {
                totalIncome += amount;
            } else if (t.type === "PENGELUARAN") {
                totalExpense += amount;
            }
        });

        return {
            totalIncome,
            totalExpense,
            balance: totalIncome - totalExpense,
        };
    }

    async getInvoiceStats(institutionId: string) {
        const invoices = await this.prisma.invoice.findMany({
            where: {
                santri: { institutionId },
            },
            select: {
                status: true,
                totalAmount: true,
            },
        });

        let totalPaid = 0;
        let totalUnpaid = 0;
        let countPaid = 0;
        let countUnpaid = 0;

        invoices.forEach((inv) => {
            const amount = Number(inv.totalAmount);
            if (inv.status === "PAID") {
                totalPaid += amount;
                countPaid++;
            } else {
                totalUnpaid += amount;
                countUnpaid++;
            }
        });

        return {
            totalPaid,
            totalUnpaid,
            countPaid,
            countUnpaid,
            totalInvoiceCount: invoices.length,
        };
    }

    async getMonthlyTrends(institutionId: string) {
        const currentYear = new Date().getFullYear();
        const startOfYear = new Date(currentYear, 0, 1);

        const transactions = await this.prisma.transaction.findMany({
            where: {
                santri: { institutionId },
                isDeleted: false,
                transactionDate: {
                    gte: startOfYear,
                },
            },
            select: {
                type: true,
                amount: true,
                transactionDate: true,
            },
        });

        const monthlyData: Record<number, { income: number; expense: number }> = {};
        // Initialize months 0-11
        for (let i = 0; i < 12; i++) {
            monthlyData[i] = { income: 0, expense: 0 };
        }

        transactions.forEach((t) => {
            const month = new Date(t.transactionDate).getMonth();
            const amount = Number(t.amount);
            const data = monthlyData[month];
            if (data) {
                if (t.type === "PEMASUKAN") {
                    data.income += amount;
                } else {
                    data.expense += amount;
                }
            }
        });

        return Object.keys(monthlyData).map((monthStr) => {
            const month = parseInt(monthStr);
            return {
                month: month + 1,
                ...monthlyData[month]!,
            };
        });
    }
}
