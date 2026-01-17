
import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './src/generated/index.js';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function testPrisma() {
    try {
        console.log('Testing prisma.santri.findFirst() with undefined institutionId...');
        const santri = await prisma.santri.findFirst({
            where: {
                nis: 'test-nis',
                institutionId: undefined
            }
        });

        console.log('Result:', JSON.stringify(santri, null, 2));
    } catch (err: any) {
        console.error('Prisma Error:', err.message);
        if (err.clientVersion) console.error('Client Version:', err.clientVersion);
    } finally {
        await pool.end();
    }
}

testPrisma();
