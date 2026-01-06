// src\routes\users.router.ts
import { Router } from "express";
import * as usersController from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getAllUsers)
router.get("/:id", usersController.getUserById)
router.post("/", usersController.createUser)
router.put("/:id", usersController.updateUser)
router.patch("/:id/status", usersController.updateUserStatus)
router.delete("/:id", usersController.deleteUser)

export default router