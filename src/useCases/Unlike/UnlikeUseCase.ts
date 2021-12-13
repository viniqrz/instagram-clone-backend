import mongoose from 'mongoose';

import { PostModel } from '../../models/Post';
import { AppError } from '../../@types/errors/AppError';

export class UnlikeUseCase {
  public async execute(postId: string, userId: string) {
    const isIdValid = mongoose.isValidObjectId(postId);
    if (!isIdValid) throw new AppError(400, 'Post id is not valid');

    const postObjectId = new mongoose.Types.ObjectId(postId);
    await PostModel.updateOne(
      { _id: postObjectId },
      { $pull: { likes: userId }, $inc: { likesCount: -1 } }
    );
  }
}
