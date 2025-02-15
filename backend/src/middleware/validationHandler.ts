import { Request, Response, NextFunction } from "express";
import { ObjectSchema } from "joi";

type RequestProperty = "body" | "query" | "params";

function validatorHandler(schema: ObjectSchema, property: RequestProperty) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property]; // Access the specified property safely
    const { error } = schema.validate(data, { abortEarly: false }); // Validate the data

    if (error) {
      // Pass the validation error to the next middleware
      return next({
        name: "ValidationError",
        message: "Validation failed",
        details: error.details,
      });
    }

    next(); // Proceed to the next middleware if validation succeeds
  };
}

export { validatorHandler };
