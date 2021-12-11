import 'dotenv/config';

import { NextFunction, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { AppError } from '../@types/errors/AppError';
import { IRequest } from '../@types/express/IRequest';

export function ensureAuth(req: IRequest, res: Response, next: NextFunction) {
  try {
    const bearer = req.headers.authorization;
    if (!bearer) throw new Error('No token sent!');

    const [, token] = bearer.split(' ');

    const { data } = verify(token, process.env.JWT_SECRET) as JwtPayload;

    req.user = data;

    next();
  } catch (err) {
    next(new AppError(401, `Couldn't authenticate: ${err.message}`));
  }
}
