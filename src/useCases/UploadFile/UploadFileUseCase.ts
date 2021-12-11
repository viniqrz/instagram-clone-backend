import { File } from '../../@types/models/File';
import { FileModel } from '../../models/File';

export class UploadFileUseCase {
  public async execute(key: string): Promise<File> {
    const fileDoc = await FileModel.create({ key });

    return fileDoc;
  }
}
