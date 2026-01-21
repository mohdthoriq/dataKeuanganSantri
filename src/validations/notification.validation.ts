import { param } from "express-validator";

export const notificationIdValidation = [
  param("id")
    .isUUID()
    .withMessage("Notification ID harus UUID"),
];
