import { PostModel } from '../../models/Post';
import { AppError } from '../../@types/errors/AppError';

export class DeletePostUseCase {
  public async execute(postId: string, userId: string) {
    const post = await PostModel.findById(postId);

    const isOwner = post.user['_id'].equals(userId);
    if (!isOwner) throw new AppError(401, 'You are not allowed to delete this');

    await post.delete();
  }
}
