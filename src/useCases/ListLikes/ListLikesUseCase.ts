import mongoose from 'mongoose';

import { PostModel } from '../../models/Post';
import { AppError } from '../../@types/errors/AppError';

export class ListLikesUseCase {
  public async execute(postId: string) {
    const isIdValid = mongoose.isValidObjectId(postId);
    if (!isIdValid) throw new AppError(400, 'Post id is not valid');

    const post = await PostModel.findOne({ _id: postId }, { likes: 1 });

    return post;
  }
}
