import { type NextFunction, type Request, type Response } from "express";
import { AppError } from "../utils/AppError.ts";

export const login = (_: Request, res: Response, next: NextFunction) => {
  let isSuccess = false;
  if (!isSuccess) {
    return next(new AppError("Invalid Email or Password", 403));
  }
  return res
    .status(200)
    .json({ status: "success", message: "Login Successful" });
};

export const register = (_: Request, res: Response) => {
  return res.status(200).json({
    status: "success",
    message: "You have hit /register successfully",
  });
};
