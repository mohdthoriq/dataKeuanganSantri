import { param } from "express-validator";

export const notificationIdValidation = [
  param("id")
    .notEmpty()
    .withMessage("Notification ID wajib diisi"),
];
