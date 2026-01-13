import { Router } from "express";
import PrismaInstance from "../database";
import { SantriRepository } from "../repository/santri.repository";
import { SantriService } from "../services/santri.service";
import { SantriController } from "../controllers/santri.controller";
import { validate } from "../utils/validator";
import { createSantriValidation, santriIdValidation, updateSantriValidation } from "../validations/santri.validation";
import { InstitutionRepository } from "../repository/institution.repository";
import { InstitutionService } from "../services/institution.service";

const router = Router();

const repo = new SantriRepository(PrismaInstance)
const service = new SantriService(repo)
const institutionRepo = new InstitutionRepository(PrismaInstance)
const institutionService = new InstitutionService(institutionRepo)
const controller = new SantriController(service, institutionService)

router.post("/", validate(createSantriValidation), controller.createSantri)
router.get("/", controller.getSantriList)
router.get("/:id", validate(santriIdValidation), controller.getSantriById)
router.put("/:id", validate(updateSantriValidation), controller.updateSantri)
router.delete("/:id", validate(santriIdValidation), controller.deleteSantri)

export default router
