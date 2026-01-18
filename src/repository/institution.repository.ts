import type { PrismaClient, institution, Prisma } from "../database";
import type { IPaginatedResult, IPaginationParams } from "../types/common";

export interface ICreateInstitutionPayload {
  name: string;
  createdBy: number;
}

export interface IInstitutionListParams extends IPaginationParams {
  userId: number;
}

export interface IInstitutionRepository {
  create(payload: ICreateInstitutionPayload): Promise<institution>;
  getById(id: number): Promise<institution>;
  getByUser(params: IInstitutionListParams): Promise<IPaginatedResult<institution>>;
  update(id: number, name: string): Promise<institution>;
  delete(id: number): Promise<boolean>;
}

export class InstitutionRepository implements IInstitutionRepository {
  constructor(private prisma: PrismaClient) { }

  async create(payload: ICreateInstitutionPayload): Promise<institution> {
    const exists = await this.prisma.institution.findFirst({
      where: { name: payload.name },
    });
    if (exists) throw new Error("Institution already exists");

    return this.prisma.institution.create({
      data: payload,
    });
  }

  async getById(id: number): Promise<institution> {
    const institution = await this.prisma.institution.findUnique({ where: { id } });
    if (!institution) throw new Error("Institution not found");
    return institution;
  }

  async getByUser(params: IInstitutionListParams): Promise<IPaginatedResult<institution>> {
    const {
      userId,
      page = 1,
      limit = 10,
      search,
      sortBy,
      order = "desc",
    } = params;
    const skip = (page - 1) * limit;

    const where: Prisma.institutionWhereInput = { createdBy: userId };
    if (search) {
      where.name = { contains: search, mode: "insensitive" };
    }

    const orderBy: Prisma.institutionOrderByWithRelationInput = {};
    if (sortBy === "name") {
      orderBy.name = order;
    } else {
      orderBy.createdAt = order;
    }

    const [data, total] = await this.prisma.$transaction([
      this.prisma.institution.findMany({
        where,
        orderBy,
        skip,
        take: limit,
      }),
      this.prisma.institution.count({ where }),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async update(id: number, name: string): Promise<institution> {
    return this.prisma.institution.update({
      where: { id },
      data: { name },
    });
  }

  async delete(id: number): Promise<boolean> {
    await this.prisma.institution.delete({ where: { id } });
    return true;
  }

  async getByName(name: string): Promise<institution | null> {
    return this.prisma.institution.findUnique({
      where: { name },
    });
  }
}