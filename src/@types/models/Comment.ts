import { Schema } from "mongoose";

export interface Comment {
  text: string;
  user: Schema.Types.ObjectId;
  createdAt: Date;
}