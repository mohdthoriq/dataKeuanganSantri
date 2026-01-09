import { body, param } from "express-validator";

export const createSantriValidation = [
  body("nis")
    .trim()
    .notEmpty().withMessage("NIS wajib diisi")
    .isLength({ min: 6, max: 10 }).withMessage("NIS harus 6–10 digit")
    .isNumeric().withMessage("NIS harus berupa angka"),

  body("fullname")
    .trim()
    .notEmpty().withMessage("Nama lengkap wajib diisi"),

  body("kelas")
    .trim()
    .notEmpty().withMessage("Kelas wajib diisi"),

  body("gender")
    .trim()
    .notEmpty().withMessage("Gender wajib diisi"),

  body("waliId")
    .isInt().withMessage("Wali ID harus berupa angka"),
];

export const updateSantriValidation = [
  param("id")
    .isInt().withMessage("Santri ID tidak valid"),

  body("nis").optional().trim().notEmpty().isNumeric().isLength({ min: 6, max: 10 }).withMessage("NIS harus 6–10 digit"),
  body("fullname").optional().trim().notEmpty(),
  body("kelas").optional().trim().notEmpty(),
  body("waliId").optional().isInt(),
];

export const santriIdValidation = [
  param("id")
    .isInt().withMessage("Santri ID harus berupa angka"),
];

export const waliIdValidation = [
  param("id")
    .isInt().withMessage("Wali ID harus berupa angka"),
];
