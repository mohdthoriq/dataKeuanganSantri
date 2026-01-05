// src/utils/email.ts
import dotenv from "dotenv";

dotenv.config();

export default {
    HOST: process.env.SMTP_HOST || "smtp.gmail.com",
    PORT: Number(process.env.SMTP_PORT) || 465,
    SECURE: process.env.SMTP_SECURE === "true",
    AUTH: {
        USER: process.env.SMTP_USER,
        PASS: process.env.SMTP_PASS,
    },
    FROM: process.env.SMTP_FROM || "noreply@lembaga.app",
    APP_NAME: process.env.APP_NAME || "Sistem Lembaga"
} as const;

