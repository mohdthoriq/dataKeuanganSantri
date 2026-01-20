// src/repository/santri.repository.ts
import type { PrismaClient, Santri, Prisma } from "../database";

import type { IPaginatedResult, IPaginationParams } from "../types/common";

export interface ICreateSantriPayload {
  nis: string;
  fullname: string;
  kelas: string;
  gender: string;
  waliId?: string;
  institutionId?: string;
  waliName?: string;
  institutionName?: string;
  isActive?: boolean;
}

export interface ISantriListParams extends IPaginationParams {
  institutionId: string;
}

export interface ISantriRepository {
  create(payload: ICreateSantriPayload): Promise<Santri>;
  getList(params: ISantriListParams): Promise<IPaginatedResult<Santri>>;
  getById(id: string): Promise<Santri>;
  update(id: string, data: Partial<ICreateSantriPayload>): Promise<Santri>;
  delete(id: string): Promise<boolean>;
  getByWali(waliId: string): Promise<Santri[]>;
  getStats(institutionId: string): Promise<{ totalSantri: number; activeSantri: number }>;
}

export class SantriRepository implements ISantriRepository {
  constructor(private prisma: PrismaClient) { }

  async findByNis(nis: string, institutionId: string) {
    return this.prisma.santri.findFirst({
      where: {
        nis,
        institutionId,
      },
    });
  }

  async create(payload: ICreateSantriPayload): Promise<Santri> {
    let institutionId = payload.institutionId;
    let institutionName = payload.institutionName;

    if (institutionId) {
      const institution = await this.prisma.institution.findUnique({
        where: { id: institutionId },
        select: { id: true, name: true },
      });

      if (!institution) {
        throw new Error("Institution not found");
      }

      institutionId = institution.id;
      institutionName = institution.name;
    }
    else if (institutionName) {
      let institution = await this.prisma.institution.findFirst({
        where: { name: institutionName },
        select: { id: true, name: true },
      });

      // 🔥 AUTO CREATE KALO BELUM ADA
      if (!institution) {
        institution = await this.prisma.institution.create({
          data: {
            name: institutionName,
            createdBy: "1", // admin default / from token - TODO: fix this to use real admin ID
          },
          select: { id: true, name: true },
        });
      }

      institutionId = institution.id;
      institutionName = institution.name;
    }
    else {
      throw new Error("Institution ID or Name is required");
    }


    const exists = await this.prisma.santri.findFirst({
      where: {
        nis: payload.nis,
        institutionId: institutionId!,
      },
    });

    if (exists) {
      throw new Error("Santri with this NIS already exists in the institution");
    }

    let waliId = payload.waliId;
    let waliName = payload.waliName;

    if (waliId) {
      const wali = await this.prisma.users.findUnique({
        where: { id: waliId },
        select: { username: true },
      });
      if (!wali) throw new Error("Wali not found");
      waliName = wali.username;
    } else if (waliName) {
      const wali = await this.prisma.users.findFirst({
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

        waliId,
        waliName,

        institutionId,
        institutionName,

      },
    });
  }

  async getList(
    params: ISantriListParams
  ): Promise<IPaginatedResult<Santri>> {
    const {
      institutionId,
      page = 1,
      limit = 10,
      search,
      sortBy,
      order = "desc",
    } = params;

    const skip = (page - 1) * limit;

    const where: Prisma.SantriWhereInput = {};

    if (institutionId) {
      where.institutionId = institutionId;
    }

    if (search) {
      where.OR = [
        { nis: { contains: search, mode: "insensitive" } },
        { fullname: { contains: search, mode: "insensitive" } },
        {
          wali: {
            username: { contains: search, mode: "insensitive" },
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
      orderBy.waliName = order;
    } else {
      orderBy.createdAt = order;
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.santri.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        include: {
          wali: {
            select: {
              id: true,
              username: true,
              email: true,
              profile: {
                select: {
                  name: true,
                  phone: true,
                }
              }
            },
          },
          institution: {
            select: {
              name: true,
            },
          },
        },
      }),
      this.prisma.santri.count({ where }),
    ]);

    return {
      data,
      meta: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getById(id: string): Promise<Santri> {
    const santri = await this.prisma.santri.findUnique({
      where: { id },
      include: {
        wali: {
          select: {
            id: true,
            username: true,
            email: true,
            profile: true
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

  async update(id: string, data: Partial<ICreateSantriPayload>): Promise<Santri> {
    const santri = await this.prisma.santri.findUnique({
      where: { id },
      include: { wali: { select: { username: true } } }
    });
    if (!santri) {
      throw new Error("Santri not found");
    }

    const { waliId, institutionId, ...otherData } = data;
    const updateData: Prisma.SantriUpdateInput = { ...otherData };

    if (waliId && waliId !== santri.waliId) {
      updateData.wali = { connect: { id: waliId } };
      const wali = await this.prisma.users.findUnique({
        where: { id: waliId },
        select: { username: true },
      });
      if (!wali) throw new Error("Wali not found");
      updateData.waliName = wali.username;
    } else if (data.waliName && data.waliName !== santri.waliName) {
      const wali = await this.prisma.users.findFirst({
        where: { username: data.waliName },
        select: { id: true },
      });
      if (!wali) throw new Error("Wali not found");
    } else if (data.waliName && data.waliName !== santri.wali?.username) {
      // Logic for finding by name if needed, but primarily we rely on ID now.
      // Or finding by username to get ID:
      const wali = await this.prisma.users.findFirst({
        where: { username: data.waliName },
        select: { id: true },
      });
      if (!wali) throw new Error("Wali not found");
      updateData.wali = {
        connect: { id: wali.id },
      };
    }

    if (institutionId && institutionId !== santri.institutionId) {
      updateData.institution = { connect: { id: institutionId } };
      const institution = await this.prisma.institution.findUnique({
        where: { id: institutionId },
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

  async delete(id: string): Promise<boolean> {
    await this.prisma.santri.delete({ where: { id } });
    return true;
  }

  async getByWali(waliId: string): Promise<Santri[]> {
    return this.prisma.santri.findMany({
      where: { waliId },
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

  async getStats(institutionId: string): Promise<{ totalSantri: number; activeSantri: number }> {
    const totalSantri = await this.prisma.santri.count({
      where: { institutionId },
    });

    const activeSantri = await this.prisma.santri.count({
      where: { institutionId, isActive: true },
    });

    return { totalSantri, activeSantri };
  }
}




