import crypto from 'crypto';
import { AppError } from '../../@types/errors/AppError';

import { createHash } from '../../helpers/createHash';
import { ResetTokenModel } from '../../models/ResetToken';
import { UserModel } from '../../models/User';

export class ForgotPasswordUseCase {
  public async execute(email: string) {
    const user = await UserModel.findOne({ email });
    if (!user) throw new AppError(400, 'There is no user with this email');

    const token = crypto.randomBytes(6).toString('hex');
    const hash = createHash(token);

    await ResetTokenModel.create({ user, token: hash });

    console.log('Sending email...');
    console.log(`${user.name}, here's your password-reset code: ${token}`);
  }
}
