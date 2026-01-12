import type { NextFunction, Request, Response } from "express";
import { validationResult, type ValidationChain } from "express-validator";
import { errorResponse } from "./response";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map(v => v.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) return next();

    const errorArray = errors.array() || [];
    const firstError = errorArray[0]?.msg || "Validation Error";

    const errorList = errorArray.map(err => ({
      field: err.type === "field" ? err.path : "body",
      message: err.msg
    }));

    return errorResponse(res, firstError, 400, errorList);
  };
};
