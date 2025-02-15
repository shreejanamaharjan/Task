import { Request, Response, NextFunction } from "express";

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("Error:", err);

  if (err.name === "ValidationError") {
    const errors = err?.error?.reduce((acc: any, error: any) => {
      const formattedMessage = error.message.replace(
        /"([^"]+)"/g,
        (_: any, word: any) => `${word[0].toUpperCase() + word.slice(1)}`
      );
      if (error.context) {
        if (typeof error.context.key === "number") {
          acc[error.context.label] = formattedMessage;
        } else {
          acc[error.context.key] = formattedMessage;
        }
      }
      return acc;
    }, {});
    res.status(400).json({ status: false, message: "Invalid Input!", errors });

    return;
  }
  res.status(500).json({
    status: false,
    error: err.message,
    message: "Internal Server Error",
  });
  return;
};

export default errorHandler;
