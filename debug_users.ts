import { PrismaClient } from './src/generated';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env.development');
dotenv.config({ path: envPath });

const prisma = new PrismaClient();

async function main() {
    const count = await prisma.user.count();
    console.log('TOTAL_USERS_IN_DB:', count);
    const users = await prisma.user.findMany({ take: 5 });
    console.log('SAMPLE_USERS:', users.map(u => u.email));
}

main()
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
