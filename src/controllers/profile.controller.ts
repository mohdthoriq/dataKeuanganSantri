import type { Request, Response } from "express";
import { successResponse } from "../utils/response";
import type { IProfileService } from "../services/profile.service";

export class ProfileController {
  constructor(private profileService: IProfileService) {}

  // create profile
  createProfile = async (req: Request, res: Response) => {
    if (!req.user) throw new Error("Unauthorized");
    const file = req.file;
    if (!file) throw new Error("Profile image is required");

    const { name, gender, address } = req.body;
    const profile = await this.profileService.create({
      name: String(name),
      gender: String(gender),
      address: String(address),
      profile_picture_url: file.path,
      public_id: file.filename,
      userId: req.user.id as string,
    });

    successResponse(res, "Profile created successfully", profile);
  };

  // get profile by userId
  getProfileByUserId = async (req: Request, res: Response) => {
    if (!req.user) throw new Error("Unauthorized");

    const profile = await this.profileService.getByUserId(req.user.id);

    successResponse(res, "Profile retrieved successfully", profile);
  };

  // get profile by profile id
  getProfileById = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid profile ID");

    const profile = await this.profileService.getById(id);

    successResponse(res, "Profile retrieved successfully", profile);
  };

// update profile
updateProfile = async (req: Request, res: Response) => {
  const id = req.params.id as string;
  if (!id) throw new Error("Invalid profile ID");

  const data: Partial<{
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
  }> = { ...req.body };

  if (req.file) {
    data.profile_picture_url = req.file.path;
    data.public_id = req.file.filename;
  }

  const profile = await this.profileService.update(id, data);

  successResponse(res, "Profile updated successfully", profile);
};


  // delete profile
  deleteProfile = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    if (!id) throw new Error("Invalid profile ID");

    await this.profileService.delete(id);

    successResponse(res, "Profile deleted successfully", null);
  };
}