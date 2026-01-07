// src/repository/category.repository.ts
import type { PrismaClient, Category, CategoryType } from "../generated";

export interface ICategoryRepository {
  create(data: { name: string; type: CategoryType; institutionId: number }): Promise<Category>;
  getList(params: {
    institutionId: number;
    type?: CategoryType;
    isActive?: boolean;
    search?: string;
  }): Promise<Category[]>;
  getById(id: number): Promise<Category>;
  updateById(
    id: number,
    payload: { name?: string; type?: CategoryType; isActive?: boolean }
  ): Promise<Category>;
  updateStatusById(id: number, isActive: boolean): Promise<Category>;
  deleteById(id: number): Promise<Category>;
}

export class CategoryRepository implements ICategoryRepository {
  constructor(private prisma: PrismaClient) {}

  async create(data: { name: string; type: CategoryType; institutionId: number }) {
    const exist = await this.prisma.category.findFirst({
      where: { name: data.name, institutionId: data.institutionId },
    });
    if (exist) throw new Error("Category already exists");

    return this.prisma.category.create({ data });
  }

  async getList(params: { institutionId: number; type?: CategoryType; isActive?: boolean; search?: string }) {
    const where: Record<string, any> = { institutionId: params.institutionId };

    if (params.type) where.type = params.type;
    if (params.isActive !== undefined) where.isActive = params.isActive;
    if (params.search) where.name = { contains: params.search, mode: "insensitive" };

    return this.prisma.category.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });
  }

  async getById(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: { institution: true, transactions: true },
    });
    if (!category) throw new Error("Category not found");
    return category;
  }

  async updateById(id: number, payload: { name?: string; type?: CategoryType; isActive?: boolean }) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new Error("Category not found");

    const data: Partial<{ name: string; type: CategoryType; isActive: boolean }> = {};
    if (payload.name !== undefined) data.name = payload.name;
    if (payload.type !== undefined) data.type = payload.type;
    if (payload.isActive !== undefined) data.isActive = payload.isActive;

    return this.prisma.category.update({ where: { id }, data });
  }

  async updateStatusById(id: number, isActive: boolean) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new Error("Category not found");

    return this.prisma.category.update({ where: { id }, data: { isActive } });
  }

  async deleteById(id: number) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new Error("Category not found");

    return this.prisma.category.delete({ where: { id } });
  }
}
