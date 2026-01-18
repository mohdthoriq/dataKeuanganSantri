// src/database.ts
import { Pool } from "pg";
import config from "./utils/env";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/index.js";
import type { user, institution, category, email_verification, $Enums, notification, profile, santri, transaction, Prisma } from "./generated/index.js";

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

export type { PrismaClient, user, institution, category, email_verification, $Enums, notification, profile, santri, transaction, Prisma }

export default PrismaInstance;

