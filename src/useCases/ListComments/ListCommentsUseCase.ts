import mongoose, { isValidObjectId } from 'mongoose';
import { AppError } from '../../@types/errors/AppError';
import { CommentModel } from '../../models/Comment';
import { IComment } from '../../@types/models/Comment';

export class ListCommentsUseCase {
  public async execute(postId: string): Promise<IComment[]> {
    const isIdValid = isValidObjectId(postId);
    if (!isIdValid) throw new AppError(400, 'Post id is not valid');

    const postObjectId = new mongoose.Types.ObjectId(postId);
    const comments = await CommentModel.find({ post: postObjectId });

    return comments;
  }
}
