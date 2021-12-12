import { User } from '../../@types/models/User';
import { UserModel } from '../../models/User';

export class ListUsersUseCase {
  public async execute(): Promise<User[]> {
    return await UserModel.find({}, { password: 0, __v: 0, id: 0 });
  }
}
