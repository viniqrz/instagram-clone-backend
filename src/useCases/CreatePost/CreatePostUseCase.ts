import { PostDto } from '../../@types/dtos/PostDto';
import { PostModel } from '../../models/Post';

export class CreatePostUseCase {
  public async execute(dto: PostDto) {
    const postDoc = await PostModel.create(dto);

    return postDoc;
  }
}
