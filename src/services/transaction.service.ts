// src/services/transaction.service.ts
import type { transaction } from "../database";
import type { ITransactionRepository, ICreateTransactionPayload, ITransactionListParams } from "../repository/transaction.repository";

export class TransactionService {
  constructor(private transactionRepo: ITransactionRepository) { }

  createTransaction(payload: ICreateTransactionPayload): Promise<transaction> {
    return this.transactionRepo.create(payload);
  }

  getTransactions(params: ITransactionListParams) {
    return this.transactionRepo.getList(params);
  }

  getTransactionById(id: number): Promise<transaction | null> {
    return this.transactionRepo.getById(id);
  }

  updateTransaction(id: number, data: Partial<ICreateTransactionPayload>): Promise<transaction> {
    return this.transactionRepo.update(id, data);
  }

  deleteTransaction(id: number): Promise<transaction> {
    return this.transactionRepo.delete(id);
  }
}
