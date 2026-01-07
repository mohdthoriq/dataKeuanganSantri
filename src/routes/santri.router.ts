import { Router } from "express";
import PrismaInstance from "../database";
import { SantriRepository } from "../repository/santri.repository";
import { SantriService } from "../services/santri.service";
import { SantriController } from "../controllers/santri.controller";
import { validate } from "../utils/validator";
import { createSantriValidation, santriIdValidation, updateSantriValidation, waliIdValidation } from "../validations/santri.validation";

const router = Router();

const repo = new SantriRepository(PrismaInstance)
const service = new SantriService(repo)
const controller = new SantriController(service)

router.post("/", validate(createSantriValidation), controller.createSantri)
router.get("/", controller.getSantriList)
router.get("/:id", validate(santriIdValidation), controller.getSantriById)
router.put("/:id", validate(updateSantriValidation), controller.updateSantri)
router.delete("/:id", validate(santriIdValidation), controller.deleteSantri)
// ===== wali =====
router.get("/wali/:id", validate(waliIdValidation), controller.getSantriByWali)

export default router
