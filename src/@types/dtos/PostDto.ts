import { Schema } from 'mongoose';

export interface PostDto {
  text: string;
  image: Schema.Types.ObjectId;
}
