
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

async function checkUsers() {
    try {
        const res = await pool.query(`
            SELECT id, username, email, role, "institutionId"
            FROM "User";
        `);
        console.log('Users in database:');
        console.log(JSON.stringify(res.rows, null, 2));

        const institutions = await pool.query(`
            SELECT id, name FROM "Institution";
        `);
        console.log('Institutions in database:');
        console.log(JSON.stringify(institutions.rows, null, 2));
    } catch (err) {
        console.error('Error checking users:', err);
    } finally {
        await pool.end();
    }
}

checkUsers();
