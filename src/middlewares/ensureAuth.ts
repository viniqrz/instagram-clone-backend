import 'dotenv/config';

import { NextFunction, Response } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import { IRequest } from '../@types/express/IRequest';

export function ensureAuth(req: IRequest, res: Response, next: NextFunction) {
  try {
    const bearer = req.headers.authorization;
    const [, token] = bearer.split(' ');

    const { data } = verify(token, process.env.JWT_SECRET) as JwtPayload;

    req.user = data;

    next();
  } catch (err) {
    next(err);
  }
}
