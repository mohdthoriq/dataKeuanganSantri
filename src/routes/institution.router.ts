import { Router } from "express";
import { InstitutionRepository } from "../repository/institution.repository";
import { InstitutionService } from "../services/institution.service";
import { InstitutionController } from "../controllers/institution.controller";
import PrismaInstance from "../database";
import { validate } from "../utils/validator";
import { createInstitutionValidation, institutionIdValidation, updateInstitutionValidation } from "../validations/institution.validation";

const router = Router();

const repo = new InstitutionRepository(PrismaInstance);
const service = new InstitutionService(repo);
const controller = new InstitutionController(service);

router.post("/", validate(createInstitutionValidation), controller.createInstitution);
router.get("/my", controller.getInstitutionsByUser);
router.get("/:id", validate(institutionIdValidation), controller.getInstitutionById);
router.put("/:id", validate(updateInstitutionValidation), controller.updateInstitution);
router.delete("/:id", controller.deleteInstitution);


export default router;