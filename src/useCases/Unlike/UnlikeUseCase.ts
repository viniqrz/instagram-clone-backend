import mongoose from 'mongoose';

import { PostModel } from '../../models/Post';
import { AppError } from '../../@types/errors/AppError';

export class UnlikeUseCase {
  public async execute(postId: string, userId: string) {
    const isIdValid = mongoose.isValidObjectId(postId);
    if (!isIdValid) throw new AppError(400, 'Post id is not valid');

    const post = await PostModel.findById(postId);

    await post.updateOne({
      $pull: { likes: userId },
    });

    if (post.likesCount > 0) await post.updateOne({ $inc: { likesCount: -1 } });
  }
}
