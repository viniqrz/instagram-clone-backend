import { Schema } from 'mongoose';

export interface User {
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  posts?: Schema.Types.ObjectId[];
  followers?: Schema.Types.ObjectId[];
  following?: Schema.Types.ObjectId[];
}
