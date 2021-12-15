import { PostModel } from '../../models/Post';
import { Post } from '../../@types/models/Post';
import { AppError } from '../../@types/errors/AppError';

export class ListPostsUseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async execute(query: any): Promise<Post[]> {
    const page = Number(query.page || 1);
    const offset = Number(query.offset || 10);
    const skip = (page - 1) * offset;
    const limit = offset;

    if (offset > 100) throw new AppError(400, 'Offset is too large (max 100).');

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
