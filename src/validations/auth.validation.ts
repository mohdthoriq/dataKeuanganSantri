import { body } from "express-validator";

/* ================= REGISTER ADMIN ================= */
export const registerAdminValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Format email tidak valid"),

  body("password")
    .notEmpty().withMessage("Password wajib diisi")
    .isLength({ min: 8 }).withMessage("Password minimal 8 karakter"),

  body("username")
    .trim()
    .notEmpty().withMessage("Name wajib diisi")
    .isLength({ min: 3 }).withMessage("Name minimal 3 karakter"),

  body("institution")
    .trim()
    .notEmpty().withMessage("Institution wajib diisi"),
];

/* ================= LOGIN ================= */
export const loginValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Format email tidak valid"),

  body("password")
    .notEmpty().withMessage("Password wajib diisi"),
];

/* ================= REQUEST RESET PASSWORD ================= */
export const requestResetValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Format email tidak valid"),
];

/* ================= RESET PASSWORD ================= */
export const resetPasswordValidation = [
  body("email")
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Email tidak valid"),

  body("otp")
    .notEmpty().withMessage("OTP wajib diisi"),

  body("password")
    .notEmpty().withMessage("Password baru wajib diisi")
    .isLength({ min: 8 }).withMessage("Password minimal 8 karakter"),
];
