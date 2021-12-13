import mongoose from 'mongoose';

import { PostModel } from '../../models/Post';
import { AppError } from '../../@types/errors/AppError';

export class UnlikeUseCase {
  public async execute(postId: string, userId: string) {
    const isIdValid = mongoose.isValidObjectId(postId);
    if (!isIdValid) throw new AppError(400, 'Post id is not valid');

    const post = await PostModel.findById(postId);

    const { modifiedCount } = await post.updateOne({
      $pull: { likes: userId },
    });

    if (modifiedCount > 0) {
      await post.updateOne({ $inc: { likesCount: -1 } });
    } else {
      throw new AppError(400, 'You already unliked this post');
    }
  }
}
