import { Injectable } from '@nestjs/common';
import { MetaData } from './Entity/metadata.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream } from 'fs';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(MetaData)
    private dataRepository: Repository<MetaData>,
  ) {}

  async uploadFile(file): Promise<MetaData> {
    const name = file.originalname;
    const size = file.size;
    const type = file.mimetype;

    const res = await this.dataRepository.save({
      name: name,
      size: size,
      mimeType: type,
    });

    return res;
  }

  async downloadFile(fileName, res): Promise<any> {
    const filePath = `./uploads/${fileName}`;
    const readStream = createReadStream(filePath);
    readStream.pipe(res);
    return await res;
  }
}
