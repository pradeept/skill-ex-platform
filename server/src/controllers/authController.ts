import { type NextFunction, type Request, type Response } from "express";
import { AppError } from "../utils/AppError.ts";
import * as z from "zod";
import { loginSchema, registerSchema } from "../validators/auth.schema.ts";

export const login = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;

  //zod validation and errors handled by global error handler
  if (!body || !body.email || !body.password) {
    return next(new AppError("email and password are required", 400));
  }

  // parse will throw a ZodError by default
  const validatedBody = loginSchema.parse(body)

  // database logic goes here

  return res.status(200).json({
    status: "success",
    message: "Login Successful",
    token: "jwttoken",
  });
};

export const register = (req: Request, res: Response, next: NextFunction) => {
  const body = req.body; // x-www-form-urlencoded

  //zod validation and errors handled by global error handler
  if (!body || !body.email || !body.password || !body.fullname) {
    return next(new AppError("fullname, email and password are required", 400));
  }

  // parse will throw a ZodError by default
  const validatedBody = registerSchema.parse(body);

  // database logic goes here

  return res.status(200).json({
    status: "success",
    message: "You have hit /register successfully",
  });
};
