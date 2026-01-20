import type { InstitutionProfileRepository } from "../repository/profileInstitution.repository";

export class InstitutionProfileService {
  constructor(
    private profileRepo: InstitutionProfileRepository
  ) {}

  async getProfile(institutionId: string) {
    if (!institutionId) {
      throw new Error("Invalid institutionId");
    }

    const profile = await this.profileRepo.findByInstitutionId(institutionId);

    if (!profile) {
      throw new Error("Institution profile not found");
    }

    return profile;
  }

  async createProfile(data: {
  institutionId: string;
  name: string;
  address?: string;
  phone?: string;
  email?: string;
  website?: string;
  logoUrl: string;
  public_id?: string;
  description?: string;
}) {
  const exist = await this.profileRepo.findByInstitutionId(data.institutionId);
  if (exist) {
    throw new Error("Institution profile already exists");
  }

  return this.profileRepo.create(data);
}

  async updateProfile(payload: {
    institutionId: string;
    address?: string;
    phone?: string;
    email?: string;
    website?: string;
    logoUrl?: string;
    description?: string;
  }) {
    const { institutionId, ...updateData } = payload;

    if (!institutionId) {
      throw new Error("Invalid institutionId");
    }

    const existing = await this.profileRepo.findByInstitutionId(institutionId);
    if (!existing) {
      throw new Error("Institution profile not found");
    }

    return this.profileRepo.updateByInstitutionId(institutionId, updateData);
  }

  async deleteProfile(institutionId: string) {
    if (!institutionId) {
      throw new Error("Invalid institutionId");
    }

    const existing = await this.profileRepo.findByInstitutionId(institutionId);
    if (!existing) {
      throw new Error("Institution profile not found");
    }

    return this.profileRepo.deleteByInstitutionId(institutionId);
  }
}