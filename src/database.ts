// src/database.ts
import { Pool } from "pg";
import config from "./utils/env";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient, user_role, category_type } from "./generated/index.js";
import type { Users, Institution, Category, EmailVerification, Notification, Profile, Santri, Transaction, Prisma } from "./generated/index.js";

let prisma: PrismaClient;

const getPrisma = () => {
    if (!prisma) {
        const pool = new Pool({ connectionString: config.DATABASE_URL });
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({ adapter });
    }
    return prisma;
}

export const PrismaInstance = getPrisma();

export { user_role, category_type }
export type { PrismaClient, Users, Institution, Category, EmailVerification, Notification, Profile, Santri, Transaction, Prisma }

export default PrismaInstance;
