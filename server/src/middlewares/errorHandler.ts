import type { ErrorRequestHandler, NextFunction, Response } from "express";
import { AppError } from "../utils/AppError.ts";

export const errorHandler: ErrorRequestHandler = (
  err: Error | AppError,
  req: any,
  res: Response,
  next: NextFunction
) => {
  // defaults
  let statusCode = 500;
  let status = "error";
  let message = "Internal Server Error";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  res.status(statusCode).json({ status, message });
};
