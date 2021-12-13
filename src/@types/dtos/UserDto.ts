import { Schema } from 'mongoose';

export interface UserDto {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface PartialUser {
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  avatar?: string;
  posts?: Schema.Types.ObjectId[];
  followers?: Schema.Types.ObjectId[];
  following?: Schema.Types.ObjectId[];
}

export interface UserWithoutPassword {
  _id: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  posts: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
}

export interface UserAndToken {
  user: UserWithoutPassword;
  token: string;
}
