import { Schema } from 'mongoose';
import { User } from '../models/User';

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
  name: string;
  username: string;
  email: string;
  avatar?: string;
  posts: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  following: Schema.Types.ObjectId[];
}

export interface UserAndToken {
  user: User;
  token: string;
}
