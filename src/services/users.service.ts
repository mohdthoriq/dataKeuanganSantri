import PrismaInstance from "../database";
import bcrypt from "bcrypt";
import type { UserRole } from "../generated";

const prisma = PrismaInstance;

interface GetAllUsersParams {
  page: number;
  limit: number;
  search?: string | undefined;
  isActive?: boolean | undefined;
}

interface UpdateUserPayload {
  username?: string;
  email?: string;
  role?: UserRole;
  institutionId?: number | null;
}

interface CreateUserPayload {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  institutionId?: number;
}

export const getAll = async ({
  page,
  limit,
  search,
  isActive
}: GetAllUsersParams) => {
  const skip = (page - 1) * limit;

  const where: any = {};

  if (search) {
    where.OR = [
      { username: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } }
    ];
  }

  if (isActive !== undefined) {
    where.isActive = isActive;
  }

  const [data, total] = await prisma.$transaction([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc"
      },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        isActive: true,
        isEmailVerified: true,
        createdAt: true
      }
    }),
    prisma.user.count({ where })
  ]);

  return {
    data,
    meta: {
      page,
      limit,
      total,
      totalPage: Math.ceil(total / limit)
    }
  };
};

export const getById = async (id: number) => {
  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      isActive: true,
      isEmailVerified: true,
      createdAt: true,
      institution: {
        select: {
          id: true,
          name: true
        }
      }
    }
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export const update = async (
  id: number,
  payload: UpdateUserPayload
) => {
  const user = await prisma.user.findUnique({
    where: { id }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      ...(payload.username && { username: payload.username }),
      ...(payload.email && { email: payload.email }),
      ...(payload.role && { role: payload.role }),
      ...(payload.institutionId !== undefined && {
        institutionId: payload.institutionId
      })
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      isActive: true,
      isEmailVerified: true,
      createdAt: true
    }
  });

  return updatedUser;
};

export const create = async (payload: CreateUserPayload) => {
  const exists = await prisma.user.findUnique({
    where: { email: payload.email }
  });

  if (exists) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await prisma.user.create({
    data: {
      username: payload.username,
      email: payload.email,
      password: hashedPassword,
      role: payload.role,
      institutionId: payload.institutionId ?? null
    },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      isActive: true,
      isEmailVerified: true,
      createdAt: true
    }
  });

  return user;
};

export const updateStatus = async (
  id: number,
  isActive: boolean
) => {
  const user = await prisma.user.findUnique({
    where: { id }
  });

  if (!user) {
    throw new Error("User not found");
  }

  const updatedUser = await prisma.user.update({
    where: { id },
    data: { isActive },
    select: {
      id: true,
      username: true,
      email: true,
      role: true,
      isActive: true,
      isEmailVerified: true,
      createdAt: true
    }
  });

  return updatedUser;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: { id }
  });

  if (!user) {
    throw new Error("User not found");
  }

  await prisma.user.update({
    where: { id },
    data: {
      isActive: false
    }
  });

  return true;
};