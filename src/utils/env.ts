import dotenv from 'dotenv'

dotenv.config()

export default {
    HOST: process.env.HOST || 'http://localhost',
    PORT: process.env.PORT || 5000,
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET || 'secret_kunci_rahasia',
    SENDER_NAME: process.env.SENDER_NAME,
    SENDER_EMAIL: process.env.SENDER_EMAIL || 'datasantri22@gmail.com',
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    MIDTRANS_SERVER_KEY: process.env.MIDTRANS_SERVER_KEY,
    MIDTRANS_CLIENT_KEY: process.env.MIDTRANS_CLIENT_KEY,
    MIDTRANS_IS_PRODUCTION: process.env.MIDTRANS_IS_PRODUCTION === 'true',
} as const