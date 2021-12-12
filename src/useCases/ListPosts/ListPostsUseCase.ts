import { PostModel } from '../../models/Post';
import { Post } from '../../@types/models/Post';

export class ListPostsUseCase {
  public async execute(): Promise<Post[]> {
    return await PostModel.find({}, { __v: 0, likes: 0 }).populate({
      path: 'user',
      select: '_id username avatar',
    });
  }
}
