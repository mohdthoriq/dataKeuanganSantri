// src\routes\users.router.ts
import { Router } from "express";
import { UserRepository } from "../repository/users.repository";
import PrismaInstance from "../database";
import { UserService } from "../services/users.service";
import { UsersController } from "../controllers/users.controller";

const router = Router();

const repo = new UserRepository(PrismaInstance)
const service = new UserService(repo)
const controller = new UsersController(service)

router.get("/", controller.getAllUsers)
router.get("/:id", controller.getUserById)
router.post("/", controller.createUser)
router.put("/:id", controller.updateUser)
router.patch("/:id/status", controller.updateUserStatus)
router.delete("/:id", controller.deleteUser)

export default router