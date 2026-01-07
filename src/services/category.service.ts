// src/services/category.service.ts
import type { CategoryType } from "../generated";
import type { ICategoryRepository } from "../repository/category.repository";

export interface ICreateCategoryPayload {
  name: string;
  type: CategoryType;
  institutionId: number;
}

export interface IUpdateCategoryPayload {
  name?: string;
  type?: CategoryType;
  isActive?: boolean;
}

export class CategoryService {
  constructor(private categoryRepo: ICategoryRepository) {}

  async createCategory(payload: ICreateCategoryPayload) {
    return this.categoryRepo.create(payload);
  }

  async getCategories(params: { institutionId: number; type?: CategoryType; isActive?: boolean; search?: string }) {
    return this.categoryRepo.getList(params);
  }

  async getCategoryById(id: number) {
    return this.categoryRepo.getById(id);
  }

  async updateCategory(id: number, payload: IUpdateCategoryPayload) {
    return this.categoryRepo.updateById(id, payload);
  }

  async updateCategoryStatus(id: number, isActive: boolean) {
    return this.categoryRepo.updateStatusById(id, isActive);
  }

  async deleteCategory(id: number) {
    return this.categoryRepo.deleteById(id);
  }
}
