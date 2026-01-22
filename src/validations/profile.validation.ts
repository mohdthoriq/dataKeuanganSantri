import { body, param } from "express-validator";

// Validasi buat create profile
export const createProfileValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name wajib diisi")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name minimal 3 karakter dan maksimal 50"),
  body("gender")
    .notEmpty()
    .withMessage("Gender wajib diisi")
    .isIn(["male", "female", "other"])
    .withMessage("Gender harus valid"),
  body("address")
    .trim()
    .notEmpty()
    .withMessage("Address wajib diisi")
    .isLength({ min: 5, max: 100 })
    .withMessage("Address minimal 5 karakter dan maksimal 100"),
];

// Validasi buat update profile
export const updateProfileValidation = [
  param("id")
    .isUUID()
    .withMessage("ID harus UUID"),
  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("Name minimal 3 karakter dan maksimal 50"),
  body("gender")
    .optional()
    .isIn(["male", "female", "other"])
    .withMessage("Gender harus valid"),
  body("address")
    .optional()
    .trim()
    .isLength({ min: 5, max: 100 })
    .withMessage("Address minimal 5 karakter dan maksimal 100"),
];

// Validasi buat getById / param ID
export const getProfileByIdValidation = [
  param("id")
    .isUUID()
    .withMessage("ID harus UUID"),
];
