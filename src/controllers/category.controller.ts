import type { Request, Response } from "express";
import * as categoryService from "../services/category.service";
import { successResponse } from "../utils/response";
import { CategoryType } from "../generated";

export const create = async (req: Request, res: Response) => {
  const { name, type } = req.body;
  const institutionId = req.user?.institutionId; // dari auth middleware

  if (!name || !type) {
    throw new Error("Bad Request");
  }

  if (!institutionId) {
    throw new Error("Unauthorized");
  }

  const category = await categoryService.create({
    name,
    type,
    institutionId
  });

  successResponse(
    res,
    "Create category success",
    category
  );
};

export const getList = async (req: Request, res: Response) => {
  const institutionId = req.user?.institutionId;

  if (!institutionId) {
    throw new Error("Institution not found");
  }

  const filters: {
    institutionId: number;
    type?: CategoryType;
    isActive?: boolean;
    search?: string;
  } = { institutionId };

  if (typeof req.query.type === "string") {
    if (Object.values(CategoryType).includes(req.query.type as CategoryType)) {
      filters.type = req.query.type as CategoryType;
    }
  }

  if (typeof req.query.isActive === "string") {
    filters.isActive = req.query.isActive === "true";
  }

  if (typeof req.query.search === "string" && req.query.search.trim()) {
    filters.search = req.query.search.trim();
  }

  const categories = await categoryService.getList(filters);

  successResponse(res, "Get categories success", categories);
};