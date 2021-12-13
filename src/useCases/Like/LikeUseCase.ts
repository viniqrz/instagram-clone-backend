import mongoose, { ObjectId } from 'mongoose';

import { PostModel } from '../../models/Post';
import { AppError } from '../../@types/errors/AppError';
import { Post } from '../../@types/models/Post';

export class LikeUseCase {
  public async execute(postId: string, userId: ObjectId): Promise<Post> {
    const isIdValid = mongoose.isValidObjectId(postId);
    if (!isIdValid) throw new AppError(400, 'Post id is not valid');

    const post = await PostModel.findById(postId);
    if (!post) throw new AppError(404, 'Post not found');

    post.likes.push(userId);
    post.save();

    return post;
  }
}
