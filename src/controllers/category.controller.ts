// src/controllers/category.controller.ts
import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { CategoryService, ICreateCategoryPayload, IUpdateCategoryPayload } from "../services/category.service";
import type { ICategoryListParams } from "../repository/category.repository";

export class CategoryController {
  constructor(private categoryService: CategoryService) { }

  createCategory = async (req: Request, res: Response) => {
    const user = req.user;
    if (!user?.institutionId) throw new Error("Unauthorized: Institution ID missing");

    const payload: ICreateCategoryPayload = {
      ...req.body,
      institutionId: user.institutionId,
    };

    if (!payload.name || !payload.type) throw new Error("name and type are required");

    const category = await this.categoryService.createCategory(payload);
    successResponse(res, "Category created successfully", category);
  };

  getCategories = async (req: Request, res: Response) => {
    const institutionId = req.user?.institutionId;
    if (!institutionId) throw new Error("Unauthorized: Institution ID missing");

    const { type, isActive, search, page, limit, sortBy, order } = req.query;

    const params: ICategoryListParams = {
      institutionId: institutionId as string,
      ...(type && { type: type as "PEMASUKAN" | "PENGELUARAN" }),
      ...(isActive !== undefined && { isActive: isActive === "true" }),
      ...(search && { search: search as string }),
      ...(page && { page: Number(page) }),
      ...(limit && { limit: Number(limit) }),
      ...(sortBy && { sortBy: sortBy as string }),
      ...(order && { order: order as "asc" | "desc" }),
    };

    const categories = await this.categoryService.getCategories(params);
    successResponse(res, "Get categories success", categories);
  };


  getCategoryById = async (req: Request, res: Response) => {
    const institutionId = req.user?.institutionId;
    if (!institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid category id");
    const category = await this.categoryService.getCategoryById(id, institutionId);
    successResponse(res, "Get category detail success", category);
  };

  updateCategory = async (req: Request, res: Response) => {
    const institutionId = req.user?.institutionId;
    if (!institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid category id");
    const payload: IUpdateCategoryPayload = req.body;
    const category = await this.categoryService.updateCategory(id, institutionId, payload);
    successResponse(res, "Category updated successfully", category);
  };

  updateCategoryStatus = async (req: Request, res: Response) => {
    const institutionId = req.user?.institutionId;
    if (!institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid category id");
    const { isActive } = req.body;
    if (typeof isActive !== "boolean") throw new Error("Bad Request");

    const category = await this.categoryService.updateCategoryStatus(id, institutionId, isActive);
    successResponse(res, "Category status updated successfully", category);
  };

  deleteCategory = async (req: Request, res: Response) => {
    const institutionId = req.user?.institutionId;
    if (!institutionId) throw new Error("Unauthorized: Institution ID missing");

    const id = req.params.id as string;
    if (!id) throw new Error("Invalid category id");
    await this.categoryService.deleteCategory(id, institutionId);
    successResponse(res, "Category deleted successfully", 200);
  };
}