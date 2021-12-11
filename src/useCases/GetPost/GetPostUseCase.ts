import { AppError } from '../../@types/errors/AppError';
import { PostModel } from '../../models/Post';
import { Post } from '../../@types/models/Post';

export class GetPostUseCase {
  public async execute(id: string): Promise<Post> {
    const post = await PostModel.findById(id);
    if (!post) throw new AppError(404, 'Post not found');

    return post;
  }
}
