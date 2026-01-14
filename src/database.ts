// src/database.ts
import { Pool } from "pg";
import config from "./utils/env";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../dist/generated";
import type { User, Institution, AuthAccount, Category, EmailVerification, $Enums, Notification, PasswordReset, Profile, Santri, Transaction, Prisma } from "../dist/generated";

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

export type { PrismaClient, User, Institution, AuthAccount, Category, EmailVerification, $Enums, Notification, PasswordReset, Profile, Santri, Transaction, Prisma }

export default PrismaInstance;

