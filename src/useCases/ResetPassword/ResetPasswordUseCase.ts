import dayjs from 'dayjs';
import bcrypt from 'bcrypt';

import { createHash } from '../../helpers/createHash';
import { ResetTokenModel } from '../../models/ResetToken';
import { UserModel } from '../../models/User';
import { AppError } from '../../@types/errors/AppError';

export class ResetPasswordUseCase {
  public async execute(token: string, password: string) {
    const hash = createHash(token);

    const resetDocument = await ResetTokenModel.findOne({ token: hash });
    if (!resetDocument) throw new AppError(400, 'Token is not valid');

    const { createdAt, user } = resetDocument;

    const expirationDate = dayjs(createdAt).add(5, 'minute');
    const hasExpired = dayjs().isAfter(expirationDate);

    if (hasExpired) throw new AppError(400, 'Token has expired');

    const passwordHash = await bcrypt.hash(password, 8);

    await UserModel.findByIdAndUpdate(user, { password: passwordHash });
  }
}
