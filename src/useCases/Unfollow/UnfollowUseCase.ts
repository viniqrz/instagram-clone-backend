import mongoose from 'mongoose';

import { AppError } from '../../@types/errors/AppError';
import { UserModel } from '../../models/User';

export class UnfollowUseCase {
  public async execute(followerId: string, receiverId: string) {
    const isIdValid = mongoose.isValidObjectId(receiverId);
    if (!isIdValid) throw new AppError(400, 'Invalid user id');

    const receiverObjectId = new mongoose.Types.ObjectId(receiverId);
    const followerObjectId = new mongoose.Types.ObjectId(followerId);

    if (receiverObjectId.equals(followerId))
      throw new AppError(400, 'Cant unfollow yourself');

    const { modifiedCount } = await UserModel.updateOne(
      { _id: followerObjectId },
      { $pull: { following: receiverObjectId } }
    );

    await UserModel.updateOne(
      { _id: receiverObjectId },
      { $pull: { followers: followerObjectId }, $inc: { followersCount: -1 } }
    );

    if (modifiedCount > 0) {
      this.decrementCount(receiverObjectId, followerObjectId);
    } else {
      throw new AppError(400, 'You do not follow this user');
    }
  }

  private async decrementCount(
    receiverId: mongoose.Types.ObjectId,
    followerId: mongoose.Types.ObjectId
  ) {
    await UserModel.updateOne(
      { _id: followerId },
      { $inc: { followingCount: -1 } }
    );

    await UserModel.updateOne(
      { _id: receiverId },
      { $inc: { followersCount: -1 } }
    );
  }
}
