import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/register-admin",authController.registerAdmin );
router.post("/login", authController.userLogin);

router.post("/request-reset", authController.requestReset);
router.post("/reset-password", authController.resetPassword);


export default router;
