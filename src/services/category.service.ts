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

  async getCategoryById(id: string) {
    return this.categoryRepo.getById(id);
  }

  async updateCategory(id: string, payload: IUpdateCategoryPayload) {
    return this.categoryRepo.updateById(id, payload);
  }

  async updateCategoryStatus(id: string, isActive: boolean) {
    return this.categoryRepo.updateStatusById(id, isActive);
  }

  async deleteCategory(id: string) {
    return this.categoryRepo.deleteById(id);
  }
}