import pg from 'pg';
import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
dotenv.config({ path: envPath });

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
});

async function main() {
    const client = await pool.connect();
    try {
        console.log("Checking santri table columns...");
        const res = await client.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'Santri';
        `);
        console.log("COLUMNS:", res.rows);
    } finally {
        client.release();
    }
}

main().finally(() => pool.end());
