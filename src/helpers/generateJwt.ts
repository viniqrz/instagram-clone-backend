import 'dotenv/config';

import { sign } from 'jsonwebtoken';
import { UserWithoutPassword } from '../@types/dtos/UserDto';

export const generateJwt = (user: UserWithoutPassword, expiresIn: string) => {
  return sign(
    {
      data: user,
    },
    process.env.JWT_SECRET!,
    { expiresIn }
  );
};
