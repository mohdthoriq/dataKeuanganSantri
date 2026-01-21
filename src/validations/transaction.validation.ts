import { body, param, query } from "express-validator";

export const createTransactionValidation = [
  body("santriId")
    .notEmpty().withMessage("santriId harus diisi"),

  body("categoryId")
    .notEmpty().withMessage("categoryId harus diisi"),

  body("type")
    .isIn(["PEMASUKAN", "PENGELUARAN"])
    .withMessage("type harus PEMASUKAN atau PENGELUARAN"),

  body("amount")
    .isNumeric()
    .withMessage("amount harus angka"),

  body("transactionDate")
    .isISO8601()
    .withMessage("transactionDate harus format tanggal valid"),
];

export const updateTransactionValidation = [
  param("id")
    .notEmpty().withMessage("Transaction ID wajib diisi"),

  body("santriId").optional().notEmpty(),
  body("categoryId").optional().notEmpty(),

  body("type")
    .optional()
    .isIn(["PEMASUKAN", "PENGELUARAN"]),

  body("amount")
    .optional()
    .isNumeric(),

  body("transactionDate")
    .optional()
    .isISO8601(),

  body("description")
    .optional()
    .isString()
    .isLength({ max: 255 }),
];

export const transactionIdValidation = [
  param("id")
    .notEmpty().withMessage("Transaction ID wajib diisi"),
];

export const getTransactionsValidation = [
  query("santriId").optional().notEmpty(),
  query("categoryId").optional().notEmpty(),
  query("createdBy").optional().notEmpty(),

  query("type")
    .optional()
    .isIn(["PEMASUKAN", "PENGELUARAN"]),

  query("skip")
    .optional()
    .isInt({ min: 0 }),

  query("take")
    .optional()
    .isInt({ min: 1, max: 100 }),
];
