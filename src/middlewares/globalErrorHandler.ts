import { NextFunction, Request, Response } from 'express';
import { BaseError } from '../@types/errors/BaseError';

export const globalErrorHandler = (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  res.status(err.statusCode).json({
    status: 'fail',
    message: err.message,
  });
};
