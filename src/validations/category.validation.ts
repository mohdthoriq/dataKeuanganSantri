import { body, param, query } from "express-validator";

// Validasi untuk create category
export const createCategoryValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name wajib diisi")
    .isLength({ min: 3, max: 50 })
    .withMessage("name minimal 3 karakter dan maksimal 50"),
  body("type")
    .notEmpty()
    .withMessage("type wajib diisi")
    .isIn(["PEMASUKAN", "PENGELUARAN"])
    .withMessage("type harus PEMASUKAN atau PENGELUARAN"),
  body("institutionId")
    .notEmpty()
    .withMessage("institutionId wajib diisi")
    .isInt({ gt: 0 })
    .withMessage("institutionId harus angka positif"),
];

// Validasi untuk update category
export const updateCategoryValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("ID harus angka positif"),
  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 50 })
    .withMessage("name minimal 3 karakter dan maksimal 50"),
  body("type")
    .optional()
    .isIn(["PEMASUKAN", "PENGELUARAN"])
    .withMessage("type harus PEMASUKAN atau PENGELUARAN"),
  body("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive harus boolean"),
];

// Validasi untuk get category by ID
export const getCategoryByIdValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("ID harus angka positif"),
];

// Validasi untuk query list category
export const getCategoriesValidation = [
  query("institutionId")
    .optional()
    .isInt({ gt: 0 })
    .withMessage("institutionId harus angka positif"),
  query("type")
    .optional()
    .isIn(["PEMASUKAN", "PENGELUARAN"])
    .withMessage("type harus PEMASUKAN atau PENGELUARAN"),
  query("isActive")
    .optional()
    .isBoolean()
    .withMessage("isActive harus boolean"),
  query("search")
    .optional()
    .isString()
    .isLength({ min: 1, max: 50 })
    .withMessage("search minimal 1 karakter, maksimal 50"),
];

// Validasi untuk update status
export const updateCategoryStatusValidation = [
  param("id")
    .isInt({ gt: 0 })
    .withMessage("ID harus angka positif"),
  body("isActive")
    .notEmpty()
    .withMessage("isActive wajib diisi")
    .isBoolean()
    .withMessage("isActive harus boolean"),
];
