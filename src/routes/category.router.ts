// src/routes/category.router.ts
import Router from "express";
import { CategoryRepository } from "../repository/category.repository";
import PrismaInstance from "../database";
import { CategoryService } from "../services/category.service";
import { CategoryController } from "../controllers/category.controller";

const router = Router();

const repo = new CategoryRepository(PrismaInstance)
const service = new CategoryService(repo)
const controller = new CategoryController(service)

router.post("/", controller.createCategory) // admin input 
router.get("/", controller.getCategories) // filter: santri, date, category
router.get("/:id", controller.getCategoryById) // get by id
router.put("/:id", controller.updateCategory) // update by id
router.patch("/:id/status", controller.updateCategoryStatus) // update status by id
router.delete("/:id", controller.deleteCategory) // delete by id

export default router
