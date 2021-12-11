import { Request, Response, NextFunction } from 'express';

export const catchAsync = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};
