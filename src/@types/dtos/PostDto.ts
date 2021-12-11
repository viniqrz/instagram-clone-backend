import { Schema } from 'mongoose';

export interface PostDto {
  text: string;
  image: string;
  user: Schema.Types.ObjectId;
}
