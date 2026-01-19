import { body } from "express-validator";

export const profileInstitutionValidator = [
  body("name")
    .optional()
    .isString()
    .withMessage("name harus berupa string"),

  body("address")
    .optional()
    .isString()
    .withMessage("address harus berupa string"),
  
  body("phone")
    .optional()
    .isString()
    .withMessage("phone harus berupa string"),
  
  body("email")
    .optional()
    .isEmail()
    .withMessage("email tidak valid"),
  
  body("website")
    .optional()
    .isURL()
    .withMessage("website harus berupa URL yang valid"),
  
  body("logoUrl")
    .optional()
    .isURL()
    .withMessage("logoUrl harus berupa URL yang valid"),
  
  body("description")
    .optional()
    .isString()
    .withMessage("description harus berupa string"),
];