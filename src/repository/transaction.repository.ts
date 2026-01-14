// src/repository/transaction.repository.ts
import type { PrismaClient, Transaction, $Enums, Prisma } from "../database";

export interface ICreateTransactionPayload {
    santriId: number;
    categoryId: number;
    type: $Enums.CategoryType;
    amount: Prisma.Decimal | number;
    description?: string;
    transactionDate: Date;
    createdBy: number;
}

export interface ITransactionFilters {
    santriId?: number;
    categoryId?: number;
    type?: $Enums.CategoryType;
    createdBy?: number;
    skip?: number;
    take?: number;
}

export interface ITransactionRepository {
    create(payload: ICreateTransactionPayload): Promise<Transaction>;
    getList(filters: ITransactionFilters): Promise<{ data: Transaction[]; meta: { page: number; limit: number; total: number; totalPages: number } }>;
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

    async getList(filters: ITransactionFilters): Promise<{ data: Transaction[], meta: { page: number, limit: number, total: number, totalPages: number } }> {
        const skip = filters.skip ?? 0;
        const take = filters.take ?? 10;

        const where: Prisma.TransactionWhereInput = {
            ...(filters.santriId !== undefined && { santriId: filters.santriId }),
            ...(filters.categoryId !== undefined && { categoryId: filters.categoryId }),
            ...(filters.type !== undefined && { type: filters.type }),
            ...(filters.createdBy !== undefined && { createdBy: filters.createdBy }),
            isDeleted: false,
        };

        const [data, total] = await this.prisma.$transaction([
            this.prisma.transaction.findMany({
                where,
                skip,
                take,
                orderBy: { transactionDate: "desc" },
                include: { santri: true, category: true, admin: true },
            }),
            this.prisma.transaction.count({ where }),
        ]);

        return {
            data,
            meta: {
                page: Math.floor(skip / take) + 1,
                limit: take,
                total,
                totalPages: Math.ceil(total / take),
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
