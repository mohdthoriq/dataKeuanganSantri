import PrismaInstance from "../database";
import type { PrismaClient, InstitutionProfile } from "../database";

const prisma = PrismaInstance

export class InstitutionProfileRepository {
    constructor(private prisma: PrismaClient) {}

  async findByInstitutionId(
    institutionId: string
  ): Promise<InstitutionProfile | null> {
    return prisma.institutionProfile.findUnique({
      where: {
        institutionId,
      },
      include: {
        institution: true,
      },
    });
  }

 async create(data: {
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
  return prisma.institutionProfile.create({
    data,
  });
}

  async updateByInstitutionId(
    institutionId: string,
    data: Partial<Omit<InstitutionProfile, "id" | "institutionId" | "createdAt" | "updatedAt">>
  ) {
    return prisma.institutionProfile.update({
      where: { institutionId },
      data,
    });
  }

  async deleteByInstitutionId(institutionId: string) {
    return prisma.institutionProfile.delete({
      where: { institutionId },
    });
  }
}