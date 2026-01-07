import PrismaInstance from "../database";
import bcrypt from "bcrypt";
import type { Prisma, PrismaClient, User, UserRole } from "../generated";
import type { RequestResetResult } from "./auth.repository";

const prisma = PrismaInstance;

export interface ICreateUserPayload {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  institutionId?: number;
}

export interface IUpdateUserPayload {
  username?: string;
  email?: string;
  role?: UserRole;
  institutionId?: number | null;
}

export interface IGetAllUsersParams {
  page: number;
  limit: number;
  search?: string;
  isActive?: boolean;
}

export interface GetUsersResult extends RequestResetResult {
    success: boolean;
    data: Partial<User> & { institution: { id: number; name: string } | null};
}

export interface IUserRepository {
  getAll(params: IGetAllUsersParams): Promise<{
    data: Partial<User>[];
    meta: { page: number; limit: number; total: number; totalPages: number };
  }>;
  getById(id: number): Promise<GetUsersResult>;
  create(payload: ICreateUserPayload, admin: { institutionId: number }): Promise<Partial<User>>;
  update(id: number, payload: IUpdateUserPayload): Promise<Partial<User>>;
  updateStatus(id: number, isActive: boolean): Promise<Partial<User>>;
  deleteUser(id: number): Promise<boolean>;
}

export class UserRepository implements IUserRepository {
    constructor(private prisma: PrismaClient) {}

    async getAll({ page, limit, search, isActive }: IGetAllUsersParams) {
    const skip = (page - 1) * limit;

    const where: Prisma.UserWhereInput = {};
    if (search) {
      where.OR = [
        { username: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    if (isActive !== undefined) where.isActive = isActive;

    const [data, total] = await this.prisma.$transaction([
      prisma.user.findMany({
        where,
        skip,
        take: limit,
        orderBy: { createdAt: "desc" },
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          isActive: true,
          isEmailVerified: true,
          createdAt: true,
        },
      }),
      prisma.user.count({ where }),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async getById(id: number): Promise<GetUsersResult> {
    const user = await this.prisma.user.findFirst({
      where: { id },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        createdAt: true,
        institution: { select: { id: true, name: true } },
      },
    });

    if (!user) throw new Error("User not found");
    return { success: true, data: user };
  }

  async create(payload: ICreateUserPayload, admin: { institutionId: number }): Promise<Partial<User>> {
    const exists = await prisma.user.findUnique({ where: { email: payload.email } });
    if (exists) throw new Error("Email already exists");

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await prisma.user.create({
      data: {
        username: payload.username,
        email: payload.email,
        password: hashedPassword,
        role: payload.role,
        institutionId: admin.institutionId,
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        createdAt: true,
        institutionId: true,
      },
    });

    return user;
  }

  async update(id: number, payload: IUpdateUserPayload): Promise<Partial<User>> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: {
        ...(payload.username && { username: payload.username }),
        ...(payload.email && { email: payload.email }),
        ...(payload.role && { role: payload.role }),
        ...(payload.institutionId !== undefined && { institutionId: payload.institutionId }),
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        createdAt: true,
      },
    });

    return updatedUser;
  }

  async updateStatus(id: number, isActive: boolean): Promise<Partial<User>> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data: { isActive },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        createdAt: true,
      },
    });

    return updatedUser;
  }

  async deleteUser(id: number): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");

    await this.prisma.user.update({ where: { id }, data: { isActive: false } });
    return true;
  }
};
