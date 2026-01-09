import dotenv from 'dotenv'

dotenv.config()
console.log("Loaded Env:", {
    SENDER_EMAIL: process.env.SENDER_EMAIL,
    HOST: process.env.HOST
});

export default {
    HOST: process.env.HOST || 'http://localhost',
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'secret_kunci_rahasia',
    SENDER_NAME: process.env.SENDER_NAME,
    SENDER_EMAIL: process.env.SENDER_EMAIL || 'datasantri22@gmail.com',
    BREVO_API_KEY: process.env.BREVO_API_KEY
} as const