// src/routes/category.router.ts
import Router from "express";
import * as categoryController from "../controllers/category.controller";

const router = Router();

router.post("/", categoryController.create) // admin input 
router.get("/", categoryController.getList) // filter: santri, date, category
router.get("/:id", (req, res) => {}) // get by id
router.put("/:id", (req, res) => {}) // update by id
router.patch("/:id/status", (req, res) => {}) // update status by id
router.delete("/:id", (req, res) => {}) // delete by id

export default router
