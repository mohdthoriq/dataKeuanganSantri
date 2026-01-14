import type { PrismaClient, Profile } from "../database";

export interface IProfileRepository {
  findByUserId(userId: number): Promise<Profile | null>;
  findById(id: number): Promise<Profile | null>;
  create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: number;
  }): Promise<Profile>;
  update(id: number, data: Partial<{
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
  }>): Promise<Profile>;
  delete(id: number): Promise<Profile>;
}

export class ProfileRepository implements IProfileRepository {
  constructor(private prisma: PrismaClient) {}

  async findByUserId(userId: number): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async findById(id: number): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { id },
    });
  }

  async create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: number;
  }): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
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
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<Profile> {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
