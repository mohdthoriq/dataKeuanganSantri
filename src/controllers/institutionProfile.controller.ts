import type { Request, Response } from "express";
import { InstitutionProfileService } from "../services/institutionProfile.service";
import { successResponse } from "../utils/response";


export class InstitutionProfileController {
    constructor(private profileService: InstitutionProfileService ) {}
   getProfile = async(req: Request, res: Response) => {
    const institutionId = Number(req.query.institutionId);

    const profile = await this.profileService.getProfile(institutionId);

    successResponse(
      res,
      "Institution profile fetched successfully",
      profile
    );
  }

   create = async(req: Request, res: Response) => {
    const profile = await this.profileService.createProfile(req.body);

    successResponse(
      res,
      "Institution profile created successfully",
      profile
    );
  }

  async update(req: Request, res: Response) {
    const profile = await this.profileService.updateProfile(req.body);

    successResponse(
      res,
      "Institution profile updated successfully",
      profile
    );
  }

  async delete(req: Request, res: Response) {
    const institutionId = Number(req.query.institutionId);

    const deletedProfile = await this.profileService.deleteProfile(institutionId);

    successResponse(
      res,
      "Institution profile deleted successfully",
      deletedProfile
    );
  }
}