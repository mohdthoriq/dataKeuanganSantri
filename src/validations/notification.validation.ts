import { param } from "express-validator";

export const notificationIdValidation = [
  param("id")
    .isInt()
    .withMessage("Notification ID harus berupa angka"),
];
