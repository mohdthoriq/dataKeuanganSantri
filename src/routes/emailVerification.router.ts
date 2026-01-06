import { Router } from "express";
import { authenticate } from "../middlewares/auth.middlleware";
import * as verificationController from "../controllers/emailVerification.controller";

const router = Router();

router.post("/request-otp", verificationController.requestOtp);
router.post("/verify-otp", verificationController.verifyOtp);

export default router;