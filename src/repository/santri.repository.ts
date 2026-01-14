// src/repository/santri.repository.ts
import type { PrismaClient, Santri, Prisma } from "../database";

export interface ICreateSantriPayload {
  nis: string;
  fullname: string;
  kelas: string;
  gender: string;
  waliId?: number;
  institutionId?: number;
  waliName?: string;
  institutionName?: string;
}

export interface ISantriRepository {
  create(payload: ICreateSantriPayload): Promise<Santri>;
  getList(institutionId: number, search?: string, sortBy?: "nis" | "fullname" | "wali", order?: "asc" | "desc"): Promise<Santri[]>;
  getById(id: number): Promise<Santri>;
  update(id: number, data: Partial<ICreateSantriPayload>): Promise<Santri>;
  delete(id: number): Promise<boolean>;
  getByWali(waliId: number): Promise<Santri[]>;
  getStats(institutionId: number): Promise<{ totalSantri: number; activeSantri: number }>;
}

export class SantriRepository implements ISantriRepository {
  constructor(private prisma: PrismaClient) { }

  async create(payload: ICreateSantriPayload): Promise<Santri> {
    let institutionId = payload.institutionId;
    let institutionName = payload.institutionName;

    if (institutionId) {
      const institution = await this.prisma.institution.findUnique({
        where: { id: institutionId },
        select: { name: true },
      });
      if (!institution) throw new Error("Institution not found");
      institutionName = institution.name;
    } else if (institutionName) {
      const institution = await this.prisma.institution.findFirst({
        where: { name: institutionName },
        select: { id: true },
      });
      if (!institution) throw new Error("Institution not found");
      institutionId = institution.id;
    } else {
      throw new Error("Institution ID or Name is required");
    }

    const exists = await this.prisma.santri.findFirst({
      where: {
        nis: payload.nis,
        institutionId: institutionId,
      },
    });

    if (exists) {
      throw new Error("Santri with this NIS already exists in the institution");
    }

    let waliId = payload.waliId;
    let waliName = payload.waliName;

    if (waliId) {
      const wali = await this.prisma.user.findUnique({
        where: { id: waliId },
        select: { username: true },
      });
      if (!wali) throw new Error("Wali not found");
      waliName = wali.username;
    } else if (waliName) {
      const wali = await this.prisma.user.findFirst({
        where: { username: waliName },
        select: { id: true },
      });
      if (!wali) throw new Error("Wali not found");
      waliId = wali.id;
    } else {
      throw new Error("Wali ID or Name is required");
    }

    return this.prisma.santri.create({
      data: {
        nis: payload.nis,
        fullname: payload.fullname,
        kelas: payload.kelas,
        gender: payload.gender,

        waliId: waliId!,
        waliName: waliName!,

        institutionId: institutionId!,
        institutionName: institutionName!,
      },
    });
  }

  async getList(
    institutionId: number,
    search?: string,
    sortBy?: "nis" | "fullname" | "wali",
    order: "asc" | "desc" = "desc"
  ): Promise<Santri[]> {
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

    const orderBy: Prisma.SantriOrderByWithRelationInput = {};
    if (sortBy === "nis") {
      orderBy.nis = order;
    } else if (sortBy === "fullname") {
      orderBy.fullname = order;
    } else if (sortBy === "wali") {
      // Sort by the stored waliName field instead of relation
      orderBy.waliName = order;
    } else {
      orderBy.createdAt = order;
    }

    return this.prisma.santri.findMany({
      where,
      orderBy,
      include: {
        wali: {
          select: {
            username: true,
          },
        },
        institution: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getById(id: number): Promise<Santri> {
    const santri = await this.prisma.santri.findUnique({
      where: { id },
      include: {
        wali: {
          select: {
            username: true,
          },
        },
        institution: {
          select: {
            name: true,
          },
        },
      },
    });
    if (!santri) {
      throw new Error("Santri not found");
    }
    return santri;
  }

  async update(id: number, data: Partial<ICreateSantriPayload>): Promise<Santri> {
    const santri = await this.prisma.santri.findUnique({ where: { id } });
    if (!santri) {
      throw new Error("Santri not found");
    }

    const updateData: Prisma.SantriUpdateInput = { ...data };

    if (data.waliId && data.waliId !== santri.waliId) {
      const wali = await this.prisma.user.findUnique({
        where: { id: data.waliId },
        select: { username: true },
      });
      if (!wali) throw new Error("Wali not found");
      updateData.waliName = wali.username;
    } else if (data.waliName && data.waliName !== santri.waliName) {
      const wali = await this.prisma.user.findFirst({
        where: { username: data.waliName },
        select: { id: true },
      });
      if (!wali) throw new Error("Wali not found");
      updateData.wali = {
        connect: { id: wali.id },
      };
    }

    if (data.institutionId && data.institutionId !== santri.institutionId) {
      const institution = await this.prisma.institution.findUnique({
        where: { id: data.institutionId },
        select: { name: true },
      });
      if (!institution) throw new Error("Institution not found");
      updateData.institutionName = institution.name;
    } else if (data.institutionName && data.institutionName !== santri.institutionName) {
      const institution = await this.prisma.institution.findFirst({
        where: { name: data.institutionName },
        select: { id: true },
      });
      if (!institution) throw new Error("Institution not found");
      updateData.institution = {
        connect: { id: institution.id },
      };
    }

    return this.prisma.santri.update({
      where: { id },
      data: updateData,
    });
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
