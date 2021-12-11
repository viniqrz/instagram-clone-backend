import 'dotenv/config';

import { model, Schema } from 'mongoose';
import { File } from '../@types/models/FIle';

const fileSchema = new Schema<File>({
  key: {
    type: String,
    required: true,
    unique: true,
  },
  url: String,
});

fileSchema.pre('save', function (next) {
  this.url = `${process.env.BASE_URL}/files/${this.key}`;

  next();
});

const FileModel = model('FIle', fileSchema);

export { FileModel };
