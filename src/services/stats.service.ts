// src/services/stats.service.ts
import type { StatsRepository } from "../repository/stats.repository";

export class StatsService {
    constructor(private repository: StatsRepository) { }

    async getOverview(institutionId: string) {
        const [santriStats, transactionStats, invoiceStats, monthlyTrends, waliStats] = await Promise.all([
            this.repository.getSantriStats(institutionId),
            this.repository.getTransactionStats(institutionId),
            this.repository.getInvoiceStats(institutionId),
            this.repository.getMonthlyTrends(institutionId),
            this.repository.getWaliStats(institutionId),
        ]);

        return {
            santri: santriStats,
            transactions: transactionStats,
            invoices: invoiceStats,
            wali: waliStats,
            monthlyTrends,
        };
    }
}
