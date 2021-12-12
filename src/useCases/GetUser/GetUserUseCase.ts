import { AppError } from '../../@types/errors/AppError';
import { UserModel } from '../../models/User';
import { User } from '../../@types/models/User';
import { isValidObjectId } from 'mongoose';

export class GetUserUseCase {
  public async execute(id: string): Promise<User> {
    const isIdValid = isValidObjectId(id);
    if (!isIdValid) throw new AppError(400, 'Id is not valid');

    const user = await UserModel.findById(id).populate({ path: 'posts' });
    if (!user) throw new AppError(404, 'User not found');

    return user;
  }
}
