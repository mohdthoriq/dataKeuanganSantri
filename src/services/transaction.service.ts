// src/services/transaction.service.ts
import type { Transaction } from "../database";
import type { ITransactionRepository, ICreateTransactionPayload, ITransactionListParams } from "../repository/transaction.repository";
import { NotificationUtil } from "../utils/notification.util";

export class TransactionService {
  constructor(private transactionRepo: ITransactionRepository) { }

  async createTransaction(payload: ICreateTransactionPayload): Promise<Transaction> {
    const transaction = await this.transactionRepo.create(payload);

    // Notify Admin & Wali
    NotificationUtil.notifyTransactionCreated(transaction.id).catch(err => {
      console.error("Failed to send transaction notification:", err);
      throw new Error("Failed to send transaction notification");
    });

    return transaction;
  }

  getTransactions(params: ITransactionListParams) {
    return this.transactionRepo.getList(params);
  }

  getTransactionById(id: string, institutionId: string): Promise<Transaction | null> {
    return this.transactionRepo.getById(id, institutionId);
  }

  updateTransaction(id: string, institutionId: string, data: Partial<ICreateTransactionPayload>): Promise<Transaction> {
    return this.transactionRepo.update(id, institutionId, data);
  }

  deleteTransaction(id: string, institutionId: string): Promise<Transaction> {
    return this.transactionRepo.delete(id, institutionId);
  }
}