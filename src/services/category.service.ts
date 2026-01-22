// src/services/category.service.ts
import type { ICategoryRepository, ICategoryListParams } from "../repository/category.repository";

export interface ICreateCategoryPayload {
  name: string;
  type: "PEMASUKAN" | "PENGELUARAN";
  institutionId: string;
}

export interface IUpdateCategoryPayload {
  name?: string;
  type?: "PEMASUKAN" | "PENGELUARAN";
  isActive?: boolean;
}

export class CategoryService {
  constructor(private categoryRepo: ICategoryRepository) { }

  async createCategory(payload: ICreateCategoryPayload) {
    return this.categoryRepo.create(payload);
  }

  async getCategories(params: ICategoryListParams) {
    return this.categoryRepo.getList(params);
  }

  async getCategoryById(id: string, institutionId: string) {
    return this.categoryRepo.getById(id, institutionId);
  }

  async updateCategory(id: string, institutionId: string, payload: IUpdateCategoryPayload) {
    return this.categoryRepo.updateById(id, institutionId, payload);
  }

  async updateCategoryStatus(id: string, institutionId: string, isActive: boolean) {
    return this.categoryRepo.updateStatusById(id, institutionId, isActive);
  }

  async deleteCategory(id: string, institutionId: string) {
    return this.categoryRepo.deleteById(id, institutionId);
  }
}