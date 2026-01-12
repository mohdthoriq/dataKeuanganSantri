import PrismaInstance from "../database";
import type { InstitutionProfile, PrismaClient } from "../generated";

const prisma = PrismaInstance

export class InstitutionProfileRepository {
    constructor(private prisma: PrismaClient) {}

  async findByInstitutionId(
    institutionId: number
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

  async create(
    data: Omit<InstitutionProfile, "id" | "createdAt" | "updatedAt">
  ) {
    return prisma.institutionProfile.create({
      data,
    });
  }

  async updateByInstitutionId(
    institutionId: number,
    data: Partial<Omit<InstitutionProfile, "id" | "institutionId" | "createdAt" | "updatedAt">>
  ) {
    return prisma.institutionProfile.update({
      where: { institutionId },
      data,
    });
  }

  async deleteByInstitutionId(institutionId: number) {
    return prisma.institutionProfile.delete({
      where: { institutionId },
    });
  }
}
