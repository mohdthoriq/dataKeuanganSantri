// src/services/transaction.service.ts
import type { Transaction } from "../database";
import type { ITransactionRepository, ICreateTransactionPayload, ITransactionListParams } from "../repository/transaction.repository";

export class TransactionService {
  constructor(private transactionRepo: ITransactionRepository) { }

  createTransaction(payload: ICreateTransactionPayload): Promise<Transaction> {
    return this.transactionRepo.create(payload);
  }

  getTransactions(params: ITransactionListParams) {
    return this.transactionRepo.getList(params);
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