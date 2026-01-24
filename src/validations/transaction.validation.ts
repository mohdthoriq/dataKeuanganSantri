import { body, param, query } from "express-validator";

export const createTransactionValidation = [
  body("santriId")
    .isUUID()
    .withMessage("ID harus UUID"),

  body("categoryId")
    .isString()
    .withMessage("ID harus string"),

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
    .isUUID()
    .withMessage("ID harus UUID"),

  body("santriId").optional().isUUID().withMessage("ID harus UUID"),
  body("categoryId").optional().isString().withMessage("ID harus string"),

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
    .isUUID().withMessage("Transaction ID harus UUID"),
];

export const getTransactionsValidation = [
  query("santriId").optional().isUUID(),
  query("categoryId").optional().isString(),
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
