// src/repository/transaction.repository.ts
import type { PrismaClient, Transaction, $Enums, Prisma } from "../database";

import type { IPaginatedResult, IPaginationParams } from "../types/common";

export interface ICreateTransactionPayload {
    santriId: number;
    categoryId: number;
    type: $Enums.CategoryType;
    amount: Prisma.Decimal | number;
    description?: string;
    transactionDate: Date;
    createdBy: number;
}

export interface ITransactionListParams extends IPaginationParams {
    santriId?: number;
    categoryId?: number;
    type?: $Enums.CategoryType;
    createdBy?: number;
}

export interface ITransactionRepository {
    create(payload: ICreateTransactionPayload): Promise<Transaction>;
    getList(params: ITransactionListParams): Promise<IPaginatedResult<Transaction>>;
    getById(id: number): Promise<Transaction | null>;
    update(id: number, data: Partial<ICreateTransactionPayload>): Promise<Transaction>;
    delete(id: number): Promise<Transaction>;
}

export class TransactionRepository implements ITransactionRepository {
    constructor(private prisma: PrismaClient) { }

    async create(payload: ICreateTransactionPayload): Promise<Transaction> {
        const { santriId, categoryId, type, amount, transactionDate, createdBy, description } = payload;

        return this.prisma.transaction.create({
            data: {
                santriId,
                categoryId,
                type,
                amount,
                transactionDate,
                createdBy,
                ...(description !== undefined && { description }),
            },
        });
    }

    async getList(params: ITransactionListParams): Promise<IPaginatedResult<Transaction>> {
        const {
            santriId,
            categoryId,
            type,
            createdBy,
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

    async getById(id: number): Promise<Transaction | null> {
        return this.prisma.transaction.findFirst({
            where: { id, isDeleted: false },
            include: { santri: true, category: true, admin: true },
        });
    }

    async update(
        id: number,
        payload: Partial<ICreateTransactionPayload>
    ): Promise<Transaction> {
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

    async delete(id: number): Promise<Transaction> {
        return this.prisma.transaction.update({ where: { id }, data: { isDeleted: true } });
    }
}