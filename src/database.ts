// src/database.ts
import { Pool } from "pg";
import config from "./utils/env";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/index.js";
import type { User, Institution, auth_account, Category, EmailVerification, $Enums, Notification, password_reset, Profile, Santri, Transaction, Prisma } from "./generated/index.js";

let prisma: PrismaClient;

const getPrisma = () => {
    if (!prisma) {
        const pool = new Pool({connectionString: config.DATABASE_URL});
        const adapter = new PrismaPg(pool);
        prisma = new PrismaClient({adapter});
    }
    return prisma;
}

export const PrismaInstance = getPrisma();

export type { PrismaClient, User, Institution, auth_account, Category, EmailVerification, $Enums, Notification, password_reset, Profile, Santri, Transaction, Prisma }

export default PrismaInstance;

