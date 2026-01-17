
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function checkTable() {
    try {
        const res = await pool.query(`
            SELECT column_name, data_type 
            FROM information_schema.columns 
            WHERE table_name = 'Santri';
        `);
        console.log('Columns in Santri table:');
        console.log(JSON.stringify(res.rows, null, 2));

        const indexes = await pool.query(`
            SELECT indexname, indexdef 
            FROM pg_indexes 
            WHERE tablename = 'Santri';
        `);
        console.log('Indexes in Santri table:');
        console.log(JSON.stringify(indexes.rows, null, 2));
    } catch (err) {
        console.error('Error checking table:', err);
    } finally {
        await pool.end();
    }
}


checkTable();
