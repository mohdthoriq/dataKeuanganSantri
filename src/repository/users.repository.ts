import PrismaInstance from "../database";
import bcrypt from "bcrypt";
import type { Prisma, PrismaClient, Users } from "../database";
import type { RequestResetResult } from "./auth.repository";

import type { IPaginatedResult, IPaginationParams } from "../types/common";

const prisma = PrismaInstance;

export interface ICreateUserPayload {
  username: string;
  email: string;
  password: string;
  role: "ADMIN" | "WALI_SANTRI";
  institutionId?: number;
}

export interface IUpdateUserPayload {
  username?: string;
  email?: string;
  role?: "ADMIN" | "WALI_SANTRI";
  institutionId?: number | null;
}

export interface IUserListParams extends IPaginationParams {
  isActive?: boolean;
  institutionId?: number;
  role?: "ADMIN" | "WALI_SANTRI";
}

export interface GetUsersResult extends RequestResetResult {
  success: boolean;

  data: Partial<Users> & { institution: { id: number; name: string } | null };
}

export interface IUserRepository {
  getAll(params: IUserListParams): Promise<IPaginatedResult<Partial<Users>>>;
  getById(id: number): Promise<GetUsersResult>;
  create(payload: ICreateUserPayload, admin: { institutionId: number }): Promise<Partial<Users>>;
  update(id: number, payload: IUpdateUserPayload): Promise<Partial<Users>>;
  updateStatus(id: number, isActive: boolean): Promise<Partial<Users>>;
  deleteUser(id: number): Promise<boolean>;
}

export class UserRepository implements IUserRepository {
  constructor(private prisma: PrismaClient) { }

  async getAll(params: IUserListParams): Promise<IPaginatedResult<Partial<Users>>> {
    const {
      page = 1,
      limit = 10,
      search,
      isActive,
      institutionId,
      role,
      sortBy,
      order = "desc",
    } = params;
    const skip = (page - 1) * limit;

    const where: Prisma.UsersWhereInput = {};
    if (search) {
      where.OR = [
        { username: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }
    if (isActive !== undefined) where.isActive = isActive;
    if (institutionId) where.institutionId = institutionId;
    if (role) where.role = role;

    const orderBy: Prisma.UsersOrderByWithRelationInput = {};
    if (sortBy === "username") orderBy.username = order;
    else if (sortBy === "email") orderBy.email = order;
    else orderBy.createdAt = order;

    const [data, total] = await this.prisma.$transaction([
      this.prisma.users.findMany({
        where,
        skip,
        take: limit,
        orderBy,
        select: {
          id: true,
          username: true,
          email: true,
          role: true,
          institutionId: true,
          isActive: true,
          isEmailVerified: true,
          createdAt: true,
          institution: { select: { name: true } },
        },
      }),
      this.prisma.users.count({ where }),
    ]);

    return {
      data,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  }

  async getById(id: number): Promise<GetUsersResult> {
    const user = await this.prisma.users.findFirst({
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

  async create(payload: ICreateUserPayload, admin: { institutionId: number }): Promise<Partial<Users>> {
    const exists = await this.prisma.users.findUnique({ where: { email: payload.email } });
    if (exists) throw new Error("Email already exists");

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const user = await this.prisma.users.create({
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

  async update(id: number, payload: IUpdateUserPayload): Promise<Partial<Users>> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");

    const updatedUser = await this.prisma.users.update({
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

  async updateStatus(id: number, isActive: boolean): Promise<Partial<Users>> {
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");

    const updatedUser = await this.prisma.users.update({
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
    const user = await this.prisma.users.findUnique({ where: { id } });
    if (!user) throw new Error("User not found");

    await this.prisma.users.update({ where: { id }, data: { isActive: false } });
    return true;
  }
};