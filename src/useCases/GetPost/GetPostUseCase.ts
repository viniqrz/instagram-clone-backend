import { AppError } from '../../@types/errors/AppError';
import { PostModel } from '../../models/Post';
import { Post } from '../../@types/models/Post';
import { isValidObjectId } from 'mongoose';

export class GetPostUseCase {
  public async execute(id: string): Promise<Post> {
    const isIdValid = isValidObjectId(id);
    if (!isIdValid) throw new AppError(400, 'Id is not valid');

    const post = await PostModel.findById(id, { __v: 0, likes: 0 });
    if (!post) throw new AppError(404, 'Post not found');

    return post;
  }
}
