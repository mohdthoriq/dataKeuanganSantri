import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const router = Router();

router.post("/register-admin",authController.registerAdmin );
router.post("/login", (req, res) =>{});
router.post("/logout", (req, res) =>{});

router.post("/request-reset", (req, res) =>{});
router.post("/reset-password", (req, res) =>{});


export default router;
