import { Injectable } from '@nestjs/common';
import { createWriteStream, writeFile } from 'fs';

@Injectable()
export class FileUploadService {
  async uploadFile(file) {
    // const writeStream = createWriteStream(`./uploads/${file.originalname}`);
    // writeFile(writeStream.path, file.buffer, (err) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     console.log(`File uploaded successfully to ${writeStream.path}`);
    //   }
    // });
    const filePath = `path/to/upload/${file.originalname}`;
    const buffer = new Buffer(file.data, 'binary');
    writeFile(filePath, buffer, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`File uploaded successfully to ${filePath}`);
      }
    });
  }
}
