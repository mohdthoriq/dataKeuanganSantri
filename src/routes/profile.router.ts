import { Router } from "express";
import PrismaInstance from "../database";
import { ProfileRepository } from "../repository/profile.repository";
import { ProfileService } from "../services/profile.service";
import { ProfileController } from "../controllers/profile.controller";
import { authenticate } from "../middlewares/auth.middlleware";
import { upload } from "../middlewares/upload.middleware";
import { validate } from "../utils/validator";
import { createProfileValidation, getProfileByIdValidation, updateProfileValidation } from "../validations/profile.validation";

const router = Router()

const repo = new ProfileRepository(PrismaInstance)
const service = new ProfileService(repo)
const controller = new ProfileController(service)

router.get('/:id', validate(getProfileByIdValidation), controller.getProfileById)

router.post('/',authenticate, upload.single('profile_picture_url'), validate(createProfileValidation), controller.createProfile)

router.put('/:id',validate(updateProfileValidation), controller.updateProfile)

router.delete('/:id', controller.deleteProfile)

export default router