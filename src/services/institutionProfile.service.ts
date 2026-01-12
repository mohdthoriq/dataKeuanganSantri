import { InstitutionProfileRepository } from "../repository/institutionProfile.repository";

export class InstitutionProfileService {
  constructor(
    private profileRepo: InstitutionProfileRepository
  ) {}

  async getProfile(institutionId: number) {
    if (!institutionId || isNaN(institutionId)) {
      throw new Error("Invalid institutionId");
    }

    const profile = await this.profileRepo.findByInstitutionId(institutionId);

    if (!profile) {
      throw new Error("Institution profile not found");
    }

    return profile;
  }

  async createProfile(payload: {
    institutionId: number;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    logoUrl?: string;
    description?: string;
  }) {
    const { institutionId } = payload;

    if (!institutionId || isNaN(institutionId)) {
      throw new Error("Invalid institutionId");
    }

    const exists = await this.profileRepo.findByInstitutionId(institutionId);
    if (exists) {
      throw new Error("Institution profile already exists");
    }

    return this.profileRepo.create(payload as any);
  }

  async updateProfile(payload: {
    institutionId: number;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    logoUrl?: string;
    description?: string;
  }) {
    const { institutionId, ...updateData } = payload;

    if (!institutionId || isNaN(institutionId)) {
      throw new Error("Invalid institutionId");
    }

    const existing = await this.profileRepo.findByInstitutionId(institutionId);
    if (!existing) {
      throw new Error("Institution profile not found");
    }

    return this.profileRepo.updateByInstitutionId(institutionId, updateData);
  }

  async deleteProfile(institutionId: number) {
    if (!institutionId || isNaN(institutionId)) {
      throw new Error("Invalid institutionId");
    }

    const existing = await this.profileRepo.findByInstitutionId(institutionId);
    if (!existing) {
      throw new Error("Institution profile not found");
    }

    return this.profileRepo.deleteByInstitutionId(institutionId);
  }
}
