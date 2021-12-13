import mongoose from 'mongoose';

import { UserModel } from '../../models/User';
import { AppError } from '../../@types/errors/AppError';

export class FollowUseCase {
  public async execute(followerId: string, receiverId: string) {
    const isIdValid = mongoose.isValidObjectId(receiverId);
    if (!isIdValid) throw new AppError(400, 'Invalid user id');

    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);
    const followerObjectId = new mongoose.Types.ObjectId(followerId);

    if (receiverObjectId.equals(followerId))
      throw new AppError(400, 'Cant follow yourself');

    await UserModel.updateOne(
      { _id: followerObjectId },
      {
        $addToSet: { following: receiverObjectId },
        $inc: { followingCount: 1 },
      }
    );
    await UserModel.updateOne(
      { _id: receiverObjectId },
      {
        $addToSet: { followers: followerObjectId },
        $inc: { followersCount: 1 },
      }
    );
  }
}
