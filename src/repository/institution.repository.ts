import type { PrismaClient, Institution } from "../generated";

export interface ICreateInstitutionPayload {
  name: string;
  createdBy: number;
}

export interface IInstitutionRepository {
  create(payload: ICreateInstitutionPayload): Promise<Institution>;
  getById(id: number): Promise<Institution>;
  getByUser(userId: number): Promise<Institution[]>;
  update(id: number, name: string): Promise<Institution>;
  delete(id: number): Promise<boolean>;
}

export class InstitutionRepository implements IInstitutionRepository {
  constructor(private prisma: PrismaClient) {}

  async create(payload: ICreateInstitutionPayload): Promise<Institution> {
    const exists = await this.prisma.institution.findFirst({
      where: { name: payload.name },
    });
    if (exists) throw new Error("Institution already exists");

    return this.prisma.institution.create({
      data: payload,
    });
  }

  async getById(id: number): Promise<Institution> {
    const institution = await this.prisma.institution.findUnique({ where: { id } });
    if (!institution) throw new Error("Institution not found");
    return institution;
  }

  async getByUser(userId: number): Promise<Institution[]> {
    return this.prisma.institution.findMany({
      where: { createdBy: userId },
      orderBy: { createdAt: "desc" },
    });
  }

  async update(id: number, name: string): Promise<Institution> {
    return this.prisma.institution.update({
      where: { id },
      data: { name },
    });
  }

  async delete(id: number): Promise<boolean> {
    await this.prisma.institution.delete({ where: { id } });
    return true;
  }

  async getByName(name: string): Promise<Institution | null> {
    return this.prisma.institution.findUnique({
      where: { name },
    });
  }
}