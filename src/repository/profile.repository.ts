import type { PrismaClient, Profile, Prisma } from "../database";

export interface IProfileRepository {
  findByUserId(userId: string): Promise<Profile | null>;
  findById(id: string): Promise<Profile | null>;
  findByUserIdWithInclude(userId: string): Promise<Profile | null>;
  create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: string;
  }): Promise<Profile>;
  update(id: string, data: Partial<{
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
  }>): Promise<Profile>;
  delete(id: string): Promise<Profile>;
}

export class ProfileRepository implements IProfileRepository {
  constructor(private prisma: PrismaClient) {}

  async findByUserId(userId: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async findByUserIdWithInclude(userId: string): Promise<Profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
      include: {
        user: true,
      },
    });
  }

  async findById(id: string): Promise<Profile | null> {
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
    userId: string;
  }): Promise<Profile> {
    return this.prisma.profile.create({
      data,
    });
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
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<Profile> {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
