// src/controllers/category.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { CategoryService, ICreateCategoryPayload, IUpdateCategoryPayload } from "../services/category.service";
import type { $Enums } from "../database";

export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  createCategory = async (req: Request, res: Response) => {
    const payload: ICreateCategoryPayload = req.body;
    if (!payload.name || !payload.type || !payload.institutionId) throw new Error("name, type, and institutionId are required");

    const category = await this.categoryService.createCategory(payload);
    successResponse(res, "Category created successfully", category);
  };

  getCategories = async (req: Request, res: Response) => {
    const { institutionId, type, isActive, search } = req.query;

    const params: {
      institutionId: number;
      type?: $Enums.CategoryType;
      isActive?: boolean;
      search?: string;
    } = {
      institutionId: Number(institutionId),
      ...(type && { type: type as $Enums.CategoryType }),
      ...(isActive !== undefined && { isActive: isActive === "true" }),
      ...(search && { search: search as string }),
    };

    const categories = await this.categoryService.getCategories(params);
    successResponse(res, "Get categories success", categories);
  };


  getCategoryById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const category = await this.categoryService.getCategoryById(Number(id));
    successResponse(res, "Get category detail success", category);
  };

  updateCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload: IUpdateCategoryPayload = req.body;
    const category = await this.categoryService.updateCategory(Number(id), payload);
    successResponse(res, "Category updated successfully", category);
  };

  updateCategoryStatus = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { isActive } = req.body;
    if (typeof isActive !== "boolean") throw new Error("Bad Request");

    const category = await this.categoryService.updateCategoryStatus(Number(id), isActive);
    successResponse(res, "Category status updated successfully", category);
  };

  deleteCategory = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.categoryService.deleteCategory(Number(id));
    successResponse(res, "Category deleted successfully", 200);
  };
}
