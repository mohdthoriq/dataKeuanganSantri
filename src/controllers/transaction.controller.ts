// src/controllers/transaction.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { TransactionService } from "../services/transaction.service";
import type { ITransactionListParams } from "../repository/transaction.repository";
import type { Decimal } from "../generated/runtime/client";

export interface ICreateTransactionPayload {
    santriId?: number;
    categoryId?: number;
    type?: "PEMASUKAN" | "PENGELUARAN";
    amount?: number | Decimal;
    description?: string;
    transactionDate?: Date; // ⚡ sekarang bisa undefined
}


export class TransactionController {
    constructor(private transactionService: TransactionService) { }

    createTransaction = async (req: Request, res: Response) => {
        const { santriId, categoryId, type, amount, description, transactionDate } = req.body;
        if (!req.user?.id) throw new Error("Unauthorized");

        const transaction = await this.transactionService.createTransaction({
            santriId,
            categoryId,
            type: type as "PEMASUKAN" | "PENGELUARAN",
            amount,
            description,
            transactionDate: new Date(transactionDate),
            createdBy: req.user.id,
        });

        successResponse(res, "Transaction created successfully", transaction);
    };

    getTransactions = async (req: Request, res: Response) => {
        const { santriId, categoryId, type, createdBy, skip, take, page, limit, search, sortBy, order } = req.query;

        const params: ITransactionListParams = {
            ...(santriId && { santriId: santriId as string }),
            ...(categoryId && { categoryId: categoryId as string }),
            ...(type && { type: type as "PEMASUKAN" | "PENGELUARAN" }),
            ...(createdBy && { createdBy: createdBy as string }),
            ...(page && { page: Number(page) }),
            ...(limit && { limit: Number(limit) }),
            ...(search && { search: search as string }),
            ...(sortBy && { sortBy: sortBy as string }),
            ...(order && { order: order as "asc" | "desc" }),
        };

        const result = await this.transactionService.getTransactions(params);

        successResponse(res, "Get transactions successfully", result.data, result.meta);
    };



    getTransactionById = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        if (!id) throw new Error("Invalid transaction ID");

        const transaction = await this.transactionService.getTransactionById(id);
        if (!transaction) throw new Error("Transaction not found");

        successResponse(res, "Get transaction successfully", transaction);
    };

    updateTransaction = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        if (!id) throw new Error("Invalid transaction ID");

        const { santriId, categoryId, type, amount, description, transactionDate } = req.body;

        const updatedTransaction = await this.transactionService.updateTransaction(id, {
            santriId,
            categoryId,
            ...(type && { type: type as "PEMASUKAN" | "PENGELUARAN" }),
            amount,
            description,
            ...(transactionDate && { transactionDate: new Date(transactionDate) }),
        });

        successResponse(res, "Transaction updated successfully", updatedTransaction);
    };

    deleteTransaction = async (req: Request, res: Response) => {
        const id = req.params.id as string;
        if (!id) throw new Error("Invalid transaction ID");

        const deletedTransaction = await this.transactionService.deleteTransaction(id);

        successResponse(res, "Transaction deleted successfully", deletedTransaction);
    };
}