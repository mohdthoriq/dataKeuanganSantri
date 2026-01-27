import { body } from "express-validator";

export const createInvoiceValidation = [
    body("santriId")
        .isUUID()
        .withMessage("Santri ID must be a valid UUID"),
    body("categoryId")
        .optional({ nullable: true, checkFalsy: true })
        .isUUID()
        .withMessage("Category ID must be a valid UUID"),
    body("amount")
        .isNumeric()
        .withMessage("Amount must be a number")
        .custom((value) => value > 0)
        .withMessage("Amount must be greater than 0"),
    body("description")
        .optional({ nullable: true })
        .isString()
        .withMessage("Description must be a string"),
];
