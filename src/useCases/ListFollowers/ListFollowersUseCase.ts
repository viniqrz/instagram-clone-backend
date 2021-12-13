import mongoose from 'mongoose';

import { AppError } from '../../@types/errors/AppError';
import { UserModel } from '../../models/User';
import { User } from '../../@types/models/User';

export class ListFollowersUseCase {
  public async execute(userId: string): Promise<User> {
    const isIdValid = mongoose.isValidObjectId(userId);
    if (!isIdValid) throw new AppError(400, 'User id is not valid');

    const userObjectId = new mongoose.Types.ObjectId(userId);
    const followers = await UserModel.findOne(
      { _id: userObjectId },
      { followers: 1 }
    ).populate({ path: 'followers', select: '_id username avatar' });

    return followers;
  }
}
