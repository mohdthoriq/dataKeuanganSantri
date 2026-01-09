// src/repository/santri.repository.ts
import type { PrismaClient, Santri } from "../generated";

export interface ICreateSantriPayload {
  nis: string;
  fullname: string;
  kelas: string;
  gender: string;
  waliId: number;
  institutionId: number;
}

export interface ISantriRepository {
  create(payload: ICreateSantriPayload): Promise<Santri>;
  getList(institutionId: number): Promise<Santri[]>;
  getById(id: number): Promise<Santri>;
  update(id: number, data: Partial<ICreateSantriPayload>): Promise<Santri>;
  delete(id: number): Promise<boolean>;
  getByWali(waliId: number): Promise<Santri[]>;
}

export class SantriRepository implements ISantriRepository {
  constructor(private prisma: PrismaClient) { }

  async create(payload: ICreateSantriPayload): Promise<Santri> {
    const institution = await this.prisma.institution.findUnique({
      where: { id: payload.institutionId },
    });

    if (!institution) {
      throw new Error("Institution not found");
    }

    const exists = await this.prisma.santri.findUnique({
      where: {
        nis_institutionId: {
          nis: payload.nis,
          institutionId: payload.institutionId,
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
        waliId: payload.waliId,
        institutionId: payload.institutionId,
      },
    });
  }

  async getList(institutionId: number): Promise<Santri[]> {
    return this.prisma.santri.findMany({
      where: { institutionId },
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
    const santri = await this.prisma.santri.findUnique({ where: { id } });
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

  async getByWali(waliId: number): Promise<Santri[]> {
    return this.prisma.santri.findMany({ where: { waliId } });
  }
}
