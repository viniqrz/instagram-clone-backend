import { compare } from 'bcrypt';
import { AppError } from '../../@types/errors/AppError';
import { generateJwt } from '../../helpers/generateJwt';
import { UserModel } from '../../models/User';
import { omitPassword } from '../../helpers/omitPassword';

export class AuthenticateUseCase {
  public async execute(username: string, password: string) {
    const authError = new AppError(401, `Invalid User or Password`);

    const user = await UserModel.findOne({ username });
    if (!user) throw authError;

    const match = await compare(password, user.password);
    if (!match) throw authError;

    const userWithoutPassword = omitPassword(user);
    const token = generateJwt(userWithoutPassword, '1h');

    return { user: userWithoutPassword, token };
  }
}
