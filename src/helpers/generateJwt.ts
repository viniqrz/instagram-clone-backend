import 'dotenv/config';

import { sign } from 'jsonwebtoken';
import { User } from '../@types/models/User';

export const generateJwt = (user: User, expiresIn: string) => {
  return sign({
    data: user
  }, process.env.JWT_SECRET!, { expiresIn });
}
