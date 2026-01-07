import { body, param, query } from "express-validator";

export const createTransactionValidation = [
  body("santriId")
    .isInt().withMessage("santriId harus angka"),

  body("categoryId")
    .isInt().withMessage("categoryId harus angka"),

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
    .isInt().withMessage("Transaction ID tidak valid"),

  body("santriId").optional().isInt(),
  body("categoryId").optional().isInt(),

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
    .isInt().withMessage("Transaction ID harus angka"),
];

export const getTransactionsValidation = [
  query("santriId").optional().isInt(),
  query("categoryId").optional().isInt(),
  query("createdBy").optional().isInt(),

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
