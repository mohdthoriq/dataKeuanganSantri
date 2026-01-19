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
    userId: number;
  }): Promise<Profile>;

  getByUserId(userId: number): Promise<Profile>;
  getById(id: number): Promise<Profile>;

  update(id: number, data: Partial<{
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
  }>): Promise<Profile>;

  delete(id: number): Promise<void>;
}

export class ProfileService implements IProfileService {
  constructor(private profileRepo: IProfileRepository) { }

  async create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: number;
  }): Promise<Profile> {
    const exist = await this.profileRepo.findByUserId(data.userId);
    if (exist) throw new Error("Profile untuk user ini sudah ada");

    return this.profileRepo.create(data);
  }

  async getByUserId(userId: number): Promise<Profile> {
    const profile = await this.profileRepo.findByUserId(userId);
    if (!profile) throw new Error("Profile tidak ditemukan");
    return profile;
  }

  async getById(id: number): Promise<Profile> {
    const profile = await this.profileRepo.findById(id);
    if (!profile) throw new Error("Profile tidak ditemukan");
    return profile;
  }

  async update(
    id: number,
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

  async delete(id: number): Promise<void> {
    const profile = await this.profileRepo.findById(id);
    if (!profile) throw new Error("Profile tidak ditemukan");

    if (profile.public_id) {
      await cloudinary.uploader.destroy(profile.public_id);
    }
    await this.profileRepo.delete(id);
  }
}
