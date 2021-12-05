import { NextFunction, Request, Response } from "express";
import { BaseError } from "../@types/errors/BaseError";

export const globalErrorHandler = (
    err: BaseError,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    res
      .status(err.statusCode)
      .json({
        status: 'fail',
        message: err.message,
      });
}