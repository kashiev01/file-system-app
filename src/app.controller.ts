import {
  Controller,
  Post,
  Get,
  Param,
  UploadedFile,
  UseInterceptors,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AppService } from './app.service';
import { FileUploadService } from './file-upload/file-upload.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly fileUploadService: FileUploadService,
  ) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    await this.fileUploadService.uploadFile(file);
    return this.appService.uploadFile(file);
  }

  @Get(':fileName')
  async downloadFile(@Param('fileName') fileName, @Res() res) {
    return await this.appService.downloadFile(fileName, res);
  }
}
