// src/repository/category.repository.ts
import type { PrismaClient, Category, Prisma } from "../database";
import type { IPaginatedResult, IPaginationParams } from "../types/common";

export interface ICategoryListParams extends IPaginationParams {
  institutionId: string;
  type?: "PEMASUKAN" | "PENGELUARAN";
  isActive?: boolean;
}

export interface ICategoryRepository {
  create(data: { name: string; type: "PEMASUKAN" | "PENGELUARAN"; institutionId: string }): Promise<Category>;
  getList(params: ICategoryListParams): Promise<IPaginatedResult<Category>>;
  getById(id: string, institutionId: string): Promise<Category>;
  updateById(
    id: string,
    institutionId: string,
    payload: { name?: string; type?: "PEMASUKAN" | "PENGELUARAN"; isActive?: boolean }
  ): Promise<Category>;
  updateStatusById(id: string, institutionId: string, isActive: boolean): Promise<Category>;
  deleteById(id: string, institutionId: string): Promise<Category>;
}

export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaClient) { }

  async create(data: { name: string; type: "PEMASUKAN" | "PENGELUARAN"; institutionId: string }) {
    const exist = await this.prisma.category.findFirst({
      where: { name: data.name, institutionId: data.institutionId },
    });
    if (exist) throw new Error("Category already exists");

    return this.prisma.category.create({ data });
  }

  async getList(params: ICategoryListParams): Promise<IPaginatedResult<Category>> {
    const {
      institutionId,
      type,
      isActive,
      page = 1,
      limit = 10,
      search,
      sortBy,
      order = "desc",
    } = params;

    const skip = (page - 1) * limit;

    const where: Prisma.CategoryWhereInput = { institutionId };

    if (type) where.type = type;
    if (isActive !== undefined) where.isActive = isActive;
    if (search) where.name = { contains: search, mode: "insensitive" };

    const orderBy: Prisma.CategoryOrderByWithRelationInput = {};
    if (sortBy === "name") {
      orderBy.name = order;
    } else {
      orderBy.createdAt = order;
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.category.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      this.prisma.category.count({ where }),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getById(id: string, institutionId: string) {
    const category = await this.prisma.category.findFirst({
      where: { id, institutionId },
      include: { institution: true, transactions: true },
    });
    if (!category) throw new Error("Category not found or unauthorized");
    return category;
  }


  async updateById(id: string, institutionId: string, payload: { name?: string; type?: "PEMASUKAN" | "PENGELUARAN"; isActive?: boolean }) {
    const exists = await this.prisma.category.findFirst({ where: { id, institutionId } });
    if (!exists) throw new Error("Category not found or unauthorized");

    const data: Partial<{ name: string; type: "PEMASUKAN" | "PENGELUARAN"; isActive: boolean }> = {};

    if (payload.name !== undefined) data.name = payload.name;
    if (payload.type !== undefined) data.type = payload.type;
    if (payload.isActive !== undefined) data.isActive = payload.isActive;

    return this.prisma.category.update({ where: { id }, data });
  }

  async updateStatusById(id: string, institutionId: string, isActive: boolean) {
    const exists = await this.prisma.category.findFirst({ where: { id, institutionId } });
    if (!exists) throw new Error("Category not found or unauthorized");

    return this.prisma.category.update({ where: { id }, data: { isActive } });
  }

  async deleteById(id: string, institutionId: string) {
    const exists = await this.prisma.category.findFirst({ where: { id, institutionId } });
    if (!exists) throw new Error("Category not found or unauthorized");

    return this.prisma.category.delete({ where: { id } });
  }
}