import { Request, Response, NextFunction } from 'express';

export const catchAsync = (fn: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res);
    } catch (err) {
      next(err);
    }
  }
}