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
    .notEmpty().withMessage("Username wajib diisi")
    .isLength({ min: 3 }).withMessage("Username minimal 3 karakter"),
  
  body("institution")
    .trim()
    .notEmpty().withMessage("Institusi wajib diisi")
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
  body("token")
    .notEmpty().withMessage("Token reset wajib diisi"),

  body("newPassword")
    .notEmpty().withMessage("Password baru wajib diisi")
    .isLength({ min: 8 }).withMessage("Password baru minimal 8 karakter"),

  body("confirmPassword")
    .notEmpty().withMessage("Confirm password wajib diisi")
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error("Confirm password tidak sama");
      }
      return true;
    }),
];
