import type { CategoryType } from "../generated";
import PrismaInstance from "../database";

const prisma = PrismaInstance;

export const create = async (data: {
  name: string;
  type: CategoryType;
  institutionId: number;
}) => {
  const exist = await prisma.category.findFirst({
    where: {
      name: data.name,
      institutionId: data.institutionId
    }
  });

  if (exist) {
    throw new Error("Category already exists");
  }

  return prisma.category.create({
    data
  });
};

export const getList = async (params: {
  institutionId: number;
  type?: CategoryType;
  isActive?: boolean;
  search?: string;
}) => {
  const where: any = {
    institutionId: params.institutionId
  };

  if (params.type) {
    where.type = params.type;
  }

  if (params.isActive !== undefined) {
    where.isActive = params.isActive;
  }

  if (params.search) {
    where.name = {
      contains: params.search,
      mode: "insensitive"
    };
  }

  return prisma.category.findMany({
    where,
    orderBy: { createdAt: "desc" }
  });
};