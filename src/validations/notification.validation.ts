import { param } from "express-validator";

export const notificationIdValidation = [
  param("id")
    .isUUID()
    .withMessage("ID harus UUID"),
];
