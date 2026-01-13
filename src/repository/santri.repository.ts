// src/repository/santri.repository.ts
import type { PrismaClient, Santri } from "../generated";

export interface ICreateSantriPayload {
  nis: string;
  fullname: string;
  kelas: string;
  gender: string;
  waliName: string;
  institutionName: string;
}

export interface ISantriRepository {
  create(payload: ICreateSantriPayload): Promise<Santri>;
  getList(institutionName?: string): Promise<Santri[]>;
  getById(id: number): Promise<Santri>;
  update(id: number, data: Partial<ICreateSantriPayload>): Promise<Santri>;
  delete(id: number): Promise<boolean>;
}

export class SantriRepository implements ISantriRepository {
  constructor(private prisma: PrismaClient) { }

  async create(payload: ICreateSantriPayload): Promise<Santri> {
    const institution = await this.prisma.institution.findUnique({
      where: { name: payload.institutionName },
    });

    if (!institution) {
      throw new Error("Institution not found");
    }

    const exists = await this.prisma.santri.findUnique({
      where: {
        nis_institutionName: {
          nis: payload.nis,
          institutionName: payload.institutionName,
        },
      },
    });

    if (exists) {
      throw new Error("Santri with this NIS already exists in the institution");
    }

    return this.prisma.santri.create({
      data: {
        nis: payload.nis,
        fullname: payload.fullname,
        kelas: payload.kelas,
        gender: payload.gender,
        waliName: payload.waliName,
        institutionName: payload.institutionName,
      },
    });
  }

  async getList(institutionName?: string): Promise<Santri[]> {
    return this.prisma.santri.findMany({
      where: institutionName ? { institutionName } : {},
      include: {
        institution: {
          select: {
            id: true,
            name: true,
          }
        },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  async getById(id: number): Promise<Santri> {
    const santri = await this.prisma.santri.findUnique({
      where: { id },
      include: {
        institution: {
          select: {
            id: true,
            name: true,
          }
        },
      },
    });
    if (!santri) throw new Error("Santri not found");
    return santri;
  }

  async update(id: number, data: Partial<ICreateSantriPayload>): Promise<Santri> {
    return this.prisma.santri.update({ where: { id }, data });
  }

  async delete(id: number): Promise<boolean> {
    await this.prisma.santri.delete({ where: { id } });
    return true;
  }
}
