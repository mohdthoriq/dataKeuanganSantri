import { Pool } from 'pg';
import dotenv from 'dotenv';
import path from 'path';

// Specify the path to .env.development
const envPath = path.resolve(process.cwd(), '.env.development');
dotenv.config({ path: envPath });

console.log('Using DATABASE_URL:', process.env.DATABASE_URL);

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function checkTables() {
    try {
        const dbs = await pool.query("SELECT datname FROM pg_database WHERE datistemplate = false");
        console.log('DATABASES:', dbs.rows.map(r => r.datname).join(', '));

        const currentDb = await pool.query("SELECT current_database()");
        console.log('CURRENT_DB:', currentDb.rows[0].current_database);

        const schemas = await pool.query("SELECT schema_name FROM information_schema.schemata");
        console.log('SCHEMAS:', schemas.rows.map(r => r.schema_name).join(', '));

        const tables = await pool.query("SELECT table_schema, table_name FROM information_schema.tables WHERE table_schema NOT IN ('information_schema', 'pg_catalog') ORDER BY table_schema, table_name");
        console.log('ALL_TABLES_BY_SCHEMA:', tables.rows.map(r => `${r.table_schema}.${r.table_name}`).join(', '));

        const userCount = await pool.query('SELECT COUNT(*) FROM "User"');
        const authCount = await pool.query('SELECT COUNT(*) FROM "AuthAccount"');
        console.log('TOTAL_USERS:', userCount.rows[0].count);
        console.log('TOTAL_AUTH_ACCOUNTS:', authCount.rows[0].count);

        if (parseInt(userCount.rows[0].count) > 0) {
            const users = await pool.query('SELECT email FROM "User" LIMIT 5');
            console.log('Sample Users:', users.rows.map(r => r.email));
        }
    } catch (err) {
        console.error('Error querying database:', err);
    } finally {
        await pool.end();
    }
}

checkTables();
