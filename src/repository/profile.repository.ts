import type { PrismaClient, profile } from "../database";

export interface IProfileRepository {
  findByUserId(userId: number): Promise<profile | null>;
  findById(id: number): Promise<profile | null>;
  create(data: {
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
    userId: number;
  }): Promise<profile>;
  update(id: number, data: Partial<{
    name: string;
    gender: string;
    address: string;
    profile_picture_url?: string;
    public_id?: string;
  }>): Promise<profile>;
  delete(id: number): Promise<profile>;
}

export class ProfileRepository implements IProfileRepository {
  constructor(private prisma: PrismaClient) {}

  async findByUserId(userId: number): Promise<profile | null> {
    return this.prisma.profile.findUnique({
      where: { userId },
    });
  }

  async findById(id: number): Promise<profile | null> {
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
  }): Promise<profile> {
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
  ): Promise<profile> {
    return this.prisma.profile.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<profile> {
    return this.prisma.profile.delete({
      where: { id },
    });
  }
}
