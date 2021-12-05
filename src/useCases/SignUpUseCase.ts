import { UserDto, UserWithoutPassword } from "../@types/dtos/UserDto";
import { omitPassword } from "../helpers/omitPassword";
import { UserModel } from "../models/User";
import { AppError } from "../@types/errors/AppError";
import { hash } from "bcrypt";

export class SignUpUseCase {
  public async execute(dto: UserDto): Promise<UserWithoutPassword> {
    const { email, password } = dto;

    const userAlreadyExists = await UserModel.findOne({ email });
    if (!userAlreadyExists) throw new AppError(409, "User already exists");

    dto.password = await hash(password, 8);
  
    const doc = await UserModel.create(dto);
    const userWithoutPassword = omitPassword(doc);
    
  }
}