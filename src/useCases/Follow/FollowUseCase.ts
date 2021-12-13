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

    const { modifiedCount } = await UserModel.updateOne(
      { _id: followerObjectId },
      {
        $addToSet: { following: receiverObjectId },
      }
    );

    await UserModel.updateOne(
      { _id: receiverObjectId },
      {
        $addToSet: { followers: followerObjectId },
      }
    );

    if (modifiedCount > 0) {
      this.incrementCount(receiverObjectId, followerObjectId);
    } else {
      throw new AppError(400, 'You already follow this user');
    }
  }

  private async incrementCount(
    receiverId: mongoose.Types.ObjectId,
    followerId: mongoose.Types.ObjectId
  ) {
    await UserModel.updateOne(
      { _id: receiverId },
      {
        $inc: { followersCount: 1 },
      }
    );

    await UserModel.updateOne(
      { _id: followerId },
      { $inc: { followingCount: 1 } }
    );
  }
}
