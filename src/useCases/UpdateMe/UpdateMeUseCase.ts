import { PartialUser } from '../../@types/dtos/UserDto';
import { UserModel } from '../../models/User';

export class UpdateMeUseCase {
  public async execute(userId: string, partial: PartialUser) {
    await UserModel.findByIdAndUpdate(userId, partial);
  }
}
