// src/services/transaction.service.ts
import type { Transaction } from "../database";
import type { ITransactionRepository, ICreateTransactionPayload, ITransactionFilters } from "../repository/transaction.repository";

export class TransactionService {
  constructor(private transactionRepo: ITransactionRepository) {}

  createTransaction(payload: ICreateTransactionPayload): Promise<Transaction> {
    return this.transactionRepo.create(payload);
  }

  getTransactions(filters: ITransactionFilters) {
    return this.transactionRepo.getList(filters);
  }

  getTransactionById(id: number): Promise<Transaction | null> {
    return this.transactionRepo.getById(id);
  }

  updateTransaction(id: number, data: Partial<ICreateTransactionPayload>): Promise<Transaction> {
    return this.transactionRepo.update(id, data);
  }

  deleteTransaction(id: number): Promise<Transaction> {
    return this.transactionRepo.delete(id);
  }
}
