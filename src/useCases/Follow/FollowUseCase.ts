import { UserModel } from '../../models/User';
import { isValidObjectId } from 'mongoose';
import { AppError } from '../../@types/errors/AppError';

export class FollowUseCase {
  public async execute(followerId: string, receiverId: string) {
    const isIdValid = isValidObjectId(receiverId);
    if (!isIdValid) throw new AppError(400, 'Invalid user id');

    const receiver = await UserModel.findById(receiverId);
    if (!receiver) throw new AppError(404, 'User not found');

    const follower = await UserModel.findById(followerId);

    receiver.followers.push(follower._id);
    follower.following.push(receiver._id);

    await receiver.save();
    await follower.save();
  }
}
