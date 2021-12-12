import { PostDto } from '../../@types/dtos/PostDto';
import { PostModel } from '../../models/Post';
import { UserModel } from '../../models/User';

export class CreatePostUseCase {
  public async execute(dto: PostDto) {
    const postDoc = await PostModel.create(dto);
    const userDoc = await UserModel.findById(dto.user);

    userDoc.posts.push(postDoc._id);
    await userDoc.save();

    return postDoc;
  }
}
