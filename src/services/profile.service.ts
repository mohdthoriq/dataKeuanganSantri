import type { IProfileRepository } from "../repository/profile.repository";
import type { Profile } from "../database";
import cloudinary from "../utils/cloudinary";

export interface IProfileService {
  create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: string;
  }): Promise<Profile>;

  getByUserIdWithInclude(userId: string): Promise<Profile>;

  getByUserId(userId: string): Promise<Profile>;
  getById(id: string): Promise<Profile>;

  update(id: string, data: Partial<{
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
  }>): Promise<Profile>;

  delete(id: string): Promise<void>;
}

export class ProfileService implements IProfileService {
  constructor(private profileRepo: IProfileRepository) { }

  async create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: string;
  }): Promise<Profile> {
    const exist = await this.profileRepo.findByUserId(data.userId);
    if (exist) throw new Error("Profile untuk user ini sudah ada");

    return this.profileRepo.create(data);
  }

  async getByUserId(userId: string): Promise<Profile> {
    const profile = await this.profileRepo.findByUserId(userId);
    if (!profile) throw new Error("Profile tidak ditemukan");
    return profile;
  }

  async getByUserIdWithInclude(userId: string): Promise<Profile> {
    const profile = await this.profileRepo.findByUserIdWithInclude(userId);
    if (!profile) throw new Error("Profile tidak ditemukan");
    return profile;
  }

  async getById(id: string): Promise<Profile> {
    const profile = await this.profileRepo.findById(id);
    if (!profile) throw new Error("Profile tidak ditemukan");
    return profile;
  }

  async update(
    id: string,
    data: Partial<{
      name: string;
      gender: string;
      address: string;
      profile_picture_url?: string;
      public_id?: string;
    }>
  ): Promise<Profile> {
    const profile = await this.profileRepo.findById(id);
    if (!profile) throw new Error("Profile tidak ditemukan");

    if (data.public_id && profile.public_id) {
      await cloudinary.uploader.destroy(profile.public_id);
    }

    return this.profileRepo.update(id, data);
  }

  async delete(id: string): Promise<void> {
    const profile = await this.profileRepo.findById(id);
    if (!profile) throw new Error("Profile tidak ditemukan");

    if (profile.public_id) {
      await cloudinary.uploader.destroy(profile.public_id);
    }
    await this.profileRepo.delete(id);
  }
}
