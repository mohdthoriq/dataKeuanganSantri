import { body } from "express-validator";

/* ================= REQUEST OTP ================= */
export const requestOtpValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Format email tidak valid"),
];

/* ================= VERIFY OTP ================= */
export const verifyOtpValidation = [
  body("email")
    .trim()
    .notEmpty().withMessage("Email wajib diisi")
    .isEmail().withMessage("Format email tidak valid"),

  body("otp")
    .notEmpty().withMessage("OTP wajib diisi")
    .isLength({ min: 4, max: 6 }).withMessage("OTP tidak valid")
    .isNumeric().withMessage("OTP harus angka"),
];
