import { Router } from "express";
import PrismaInstance from "../database";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { AuthRepository } from "../repository/auth.repository";
import { validate } from "../utils/validator";
import { loginValidation, registerAdminValidation, requestResetValidation, resetPasswordValidation } from "../validations/auth.validation";

const router = Router();

const repo = new AuthRepository(PrismaInstance);
const service = new AuthService(repo);
const controller = new AuthController(service);

router.post("/register-admin",validate(registerAdminValidation),controller.registerAdmin );
router.post("/login", validate(loginValidation),controller.login);

router.post("/request-reset", validate(requestResetValidation),controller.requestReset);
router.post("/reset-password", validate(resetPasswordValidation),controller.resetPassword);


export default router;