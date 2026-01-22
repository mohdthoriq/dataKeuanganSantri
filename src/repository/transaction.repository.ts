// src/repository/transaction.repository.ts
import type { PrismaClient, Transaction, Prisma } from "../database";

import type { IPaginatedResult, IPaginationParams } from "../types/common";

export interface ICreateTransactionPayload {
    santriId: string;
    categoryId: string;
    type: "PEMASUKAN" | "PENGELUARAN";
    amount: Prisma.Decimal | number;
    description?: string;
    transactionDate: Date;
    createdBy: string;
}

export interface ITransactionListParams extends IPaginationParams {
    santriId?: string;
    categoryId?: string;
    type?: "PEMASUKAN" | "PENGELUARAN";
    createdBy?: string;
    institutionId: string;
}

export interface ITransactionRepository {
    create(payload: ICreateTransactionPayload): Promise<Transaction>;
    getList(params: ITransactionListParams): Promise<IPaginatedResult<Transaction>>;
    getById(id: string, institutionId: string): Promise<Transaction | null>;
    update(id: string, institutionId: string, data: Partial<ICreateTransactionPayload>): Promise<Transaction>;
    delete(id: string, institutionId: string): Promise<Transaction>;
}

export class TransactionRepository implements ITransactionRepository {
    constructor(private prisma: PrismaClient) { }

    async create(payload: ICreateTransactionPayload): Promise<Transaction> {
        return this.prisma.transaction.create({
            data: payload,
        });
    }

    async getList(params: ITransactionListParams): Promise<IPaginatedResult<Transaction>> {
        const {
            santriId,
            categoryId,
            type,
            createdBy,
            institutionId,
            page = 1,
            limit = 10,
            search,
            sortBy,
            order = "desc",
        } = params;

        const skip = (page - 1) * limit;

        const where: Prisma.TransactionWhereInput = {
            ...(santriId !== undefined && { santriId: santriId }),
            ...(categoryId !== undefined && { categoryId: categoryId }),
            ...(type !== undefined && { type: type }),
            ...(createdBy !== undefined && { createdBy: createdBy }),
            santri: { institutionId },
            isDeleted: false,
        };

        if (search) {
            where.OR = [
                { description: { contains: search, mode: "insensitive" } },
                { santri: { fullname: { contains: search, mode: "insensitive" } } },
            ];
        }

        const orderBy: Prisma.TransactionOrderByWithRelationInput = {};
        if (sortBy === "amount") {
            orderBy.amount = order;
        } else if (sortBy === "date") {
            orderBy.transactionDate = order;
        } else {
            orderBy.transactionDate = order;
        }

        const [data, total] = await this.prisma.$transaction([
            this.prisma.transaction.findMany({
                where,
                skip,
                take: limit,
                orderBy,
                include: { santri: true, category: true, admin: true },
            }),
            this.prisma.transaction.count({ where }),
        ]);

        return {
            data,
            meta: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            }
        };
    }

    async getById(id: string, institutionId: string): Promise<Transaction | null> {
        return this.prisma.transaction.findFirst({
            where: {
                id,
                isDeleted: false,
                santri: { institutionId }
            },
            include: { santri: true, category: true, admin: true },
        });
    }

    async update(
        id: string,
        institutionId: string,
        payload: Partial<ICreateTransactionPayload>
    ): Promise<Transaction> {
        const trans = await this.prisma.transaction.findFirst({
            where: { id, santri: { institutionId } }
        });
        if (!trans) throw new Error("Transaction not found or unauthorized");

        const data: Prisma.TransactionUpdateInput = {
            ...(payload.santriId !== undefined && { santriId: payload.santriId }),
            ...(payload.categoryId !== undefined && { categoryId: payload.categoryId }),
            ...(payload.type !== undefined && { type: payload.type }),
            ...(payload.amount !== undefined && { amount: payload.amount }),
            ...(payload.transactionDate !== undefined && { transactionDate: payload.transactionDate }),
            ...(payload.createdBy !== undefined && { createdBy: payload.createdBy }),
            ...(payload.description !== undefined && { description: payload.description }),
        };

        return this.prisma.transaction.update({
            where: { id },
            data,
        });
    }

    async delete(id: string, institutionId: string): Promise<Transaction> {
        const trans = await this.prisma.transaction.findFirst({
            where: { id, santri: { institutionId } }
        });
        if (!trans) throw new Error("Transaction not found or unauthorized");

        return this.prisma.transaction.update({ where: { id }, data: { isDeleted: true } });
    }
}