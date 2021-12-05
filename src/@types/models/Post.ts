import { Schema } from "mongoose";

export interface Post {
  text: string;
  image: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  comments?: Schema.Types.ObjectId[];
  likes?: Schema.Types.ObjectId[];
  createdAt: Date;
}