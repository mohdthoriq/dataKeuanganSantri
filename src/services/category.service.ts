// src/services/category.service.ts
import type { $Enums } from "../database";

import type { ICategoryRepository, ICategoryListParams } from "../repository/category.repository";

export interface ICreateCategoryPayload {
  name: string;
  type: $Enums.category_type;
  institutionId: number;
}

export interface IUpdateCategoryPayload {
  name?: string;
  type?: $Enums.category_type;

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