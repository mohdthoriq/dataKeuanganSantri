import { body, param } from "express-validator";

/* ================= CREATE ================= */
export const createInstitutionValidation = [
  body("name")
    .trim()
    .notEmpty().withMessage("Nama institution wajib diisi")
    .isLength({ min: 3 }).withMessage("Nama institution minimal 3 karakter"),

  body("address")
    .trim()
    .notEmpty().withMessage("Address wajib diisi"),
];

/* ================= GET BY ID ================= */
export const institutionIdValidation = [
  param("id")
    .isInt().withMessage("Institution ID harus angka"),
];

/* ================= UPDATE ================= */
export const updateInstitutionValidation = [
  param("id")
    .isInt().withMessage("Institution ID harus angka"),

  body("name")
    .optional()
    .trim()
    .isLength({ min: 3 }).withMessage("Nama institution minimal 3 karakter"),

  body("address")
    .optional()
    .trim()
    .notEmpty().withMessage("Address tidak boleh kosong"),
];
