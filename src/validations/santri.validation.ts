import { body, param } from "express-validator";

export const createSantriValidation = [
  body("nis")
    .trim()
    .notEmpty().withMessage("NIS wajib diisi")
    .isLength({ min: 6, max: 10 }).withMessage("NIS harus 6–10 digit").withMessage("NIS harus berupa angka"),

  body("fullname")
    .trim()
    .notEmpty().withMessage("Nama lengkap wajib diisi"),

  body("kelas")
    .trim()
    .notEmpty().withMessage("Kelas wajib diisi"),

  body("gender")
    .trim()
    .notEmpty().withMessage("Gender wajib diisi")
    .isIn(["Laki-laki", "Perempuan"]).withMessage("Gender harus Laki-laki atau Perempuan"),

  body("waliId")
    .trim()
    .notEmpty().withMessage("ID wali wajib diisi"),
];

export const updateSantriValidation = [
  param("id")
    .isUUID().withMessage("Santri ID tidak valid"),

  body("nis").optional().trim().notEmpty().isLength({ min: 6, max: 10 }).withMessage("NIS harus 6–10 digit"),
  body("fullname").optional().trim().notEmpty(),
  body("kelas").optional().trim().notEmpty(),
  body("gender").optional().isIn(["Laki-laki", "Perempuan"]).withMessage("Gender harus Laki-laki atau Perempuan"),
  body("waliName").optional().trim().notEmpty(),
  body("institutionName").optional().trim().notEmpty(),
];

export const santriIdValidation = [
  param("id")
    .isUUID().withMessage("Santri ID tidak valid"),
];
