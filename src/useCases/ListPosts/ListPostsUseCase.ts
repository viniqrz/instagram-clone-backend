import { PostModel } from '../../models/Post';
import { Post } from '../../@types/models/Post';
import { paginate } from '../../helpers/paginate';

export class ListPostsUseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(query: any): Promise<Post[]> {
    const { skip, limit } = paginate(query);

    return await PostModel.find({}, { __v: 0, likes: 0 })
      .populate({
        path: 'user',
        select: '_id username avatar',
      })
      .sort('-createdAt')
      .skip(skip)
      .limit(limit);
  }
}
