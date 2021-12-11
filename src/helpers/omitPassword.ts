import { User } from '../@types/models/User';
import { UserWithoutPassword } from '../@types/dtos/UserDto';

export const omitPassword = (user: User): UserWithoutPassword => {
  const obj = {};

  const keys = Object.keys(user['_doc']);

  keys
    .filter((key) => key !== 'password')
    .forEach((key) => (obj[key] = user[key]));

  return obj as UserWithoutPassword;
};
