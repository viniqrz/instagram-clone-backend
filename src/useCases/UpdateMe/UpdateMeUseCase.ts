import { hash } from 'bcrypt';
import { PartialUser } from '../../@types/dtos/UserDto';
import { UserModel } from '../../models/User';

export class UpdateMeUseCase {
  public async execute(userId: string, partial: PartialUser) {
    if ('password' in partial)
      partial.password = await hash(partial.password, 8);

    await UserModel.findByIdAndUpdate(userId, partial);
  }
}
