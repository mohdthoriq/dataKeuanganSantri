// src/repository/santri.repository.ts
import type { Prisma, PrismaClient, Santri } from "../generated";

export interface ICreateSantriPayload {
  nis: string;
  fullname: string;
  kelas: string;
  gender: string;
  waliName: string;
  institutionName: string;
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
  getStats(institutionId: number): Promise<{ totalSantri: number; activeSantri: number }>;
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
        waliName: payload.waliName,
        institutionName: payload.institutionName,
        waliId: payload.waliId,
        institutionId: payload.institutionId,
      },
    });
  }

  async getList(
    institutionId: number,
    search?: string,
    sortBy?: "nis" | "fullname" | "wali",
    order: "asc" | "desc" = "desc"
  ) {
    const where: Prisma.SantriWhereInput = {
      institutionId,
    };

    if (search) {
      where.OR = [
        { nis: { contains: search, mode: "insensitive" } },
        { fullname: { contains: search, mode: "insensitive" } },

        // ✅ RELATION FILTER (INI YANG BENAR)
        {
          wali: {
            is: {
              username: { contains: search, mode: "insensitive" },
            },
          },
        },
      ];
    }

    return this.prisma.santri.findMany({
      where,
      include: {
        wali: {
          select: { id: true, username: true },
        },
        institution: {
          select: { id: true, name: true },
        },
      },
      orderBy:
        sortBy === "wali"
          ? { wali: { username: order } }
          : sortBy
            ? { [sortBy]: order }
            : { createdAt: "desc" },
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

  async getStats(institutionId: number): Promise<{ totalSantri: number; activeSantri: number }> {
    const totalSantri = await this.prisma.santri.count({
      where: { institutionId },
    });

    const activeSantri = await this.prisma.santri.count({
      where: { institutionId, isActive: true },
    });

    return { totalSantri, activeSantri };
  }
}
