// src/utils/email.ts
import dotenv from "dotenv";
import nodemailer from "nodemailer";

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

export const sendEmail = async(to: string, subject: string, text: string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    
    const info = await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject,
        text,
    })

    return info;
}