import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { AppError } from '../@types/errors/AppError';

export function handleValidationErrors(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      const { msg, param, location } = errors.array()[0];

      throw new AppError(400, `${msg}: ${param} not found in ${location}`);
    }

    next();
  } catch (err) {
    next(err);
  }
}
