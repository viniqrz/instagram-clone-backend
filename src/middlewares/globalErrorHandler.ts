import { NextFunction, Request, Response } from 'express';
import { AppError } from '../@types/errors/AppError';
import { BaseError } from '../@types/errors/BaseError';

export const globalErrorHandler = (
  err: BaseError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
) => {
  console.log({ ...err });

  if (err.code === 11000)
    err = new AppError(400, `Duplicate field ${JSON.stringify(err.keyValue)}`);

  res.status(err.statusCode || 500).json({
    status: 'fail',
    message: err.message,
  });
};
