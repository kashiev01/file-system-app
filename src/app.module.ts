import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MetaData } from './Entity/metadata.entity';
import { DataSourceOption } from 'utils/db.config';
import { FileUploadModule } from './file-upload/file-upload.module';
import { FileUploadService } from './file-upload/file-upload.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([MetaData]),
    TypeOrmModule.forRoot(DataSourceOption),
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService, FileUploadService],
})
export class AppModule {}
