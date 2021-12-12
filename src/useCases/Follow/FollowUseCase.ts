import { UserModel } from '../../models/User';
import { isValidObjectId, ObjectId } from 'mongoose';
import { AppError } from '../../@types/errors/AppError';

export class FollowUseCase {
  public async execute(followerId: ObjectId, receiverId: string) {
    const isIdValid = isValidObjectId(receiverId);
    if (!isIdValid) throw new AppError(400, 'Invalid user id');

    const receiver = await UserModel.findById(receiverId);
    if (!receiver) throw new AppError(404, 'User not found');

    const follower = await UserModel.findById(followerId);

    if (follower._id === receiver._id)
      throw new AppError(400, 'Cant follow yourself');

    receiver.followers.push(follower._id);
    follower.following.push(receiver._id);

    await receiver.save();
    await follower.save();
  }
}
