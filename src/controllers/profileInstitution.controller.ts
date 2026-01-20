import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { InstitutionProfileService } from "../services/profileInstitution.service";


export class InstitutionProfileController {
    constructor(private profileService: InstitutionProfileService ) {}
   getProfile = async(req: Request, res: Response) => {
      const institutionId = req.user?.institutionId;
      if (!institutionId) throw new Error("Invalid institutionId");

    const profile = await this.profileService.getProfile(institutionId);

    successResponse(
      res,
      "Institution profile fetched successfully",
      profile
    );
  }

   create = async(req: Request, res: Response) => {
    if (!req.user) throw new Error("Unauthorized");
    const file = req.file;
    if (!file) throw new Error("Logo image is required")
      
    const profile = await this.profileService.createProfile({
      institutionId: req.user?.institutionId!,
      ...req.body,
      logoUrl: file.path,
      public_id: file.filename
    });

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
    const institutionId = req.query.institutionId as string;

    const deletedProfile = await this.profileService.deleteProfile(institutionId);

    successResponse(
      res,
      "Institution profile deleted successfully",
      deletedProfile
    );
  }
}