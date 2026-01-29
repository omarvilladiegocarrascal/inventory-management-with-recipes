import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
  Body,
} from '@nestjs/common';
import { FileUploadService } from './file_upload.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { MinSizeValidationPipe } from './pipes/min_size_validation.pipe';
import * as multer from 'multer';

@ApiTags('file-upload')
@ApiBearerAuth()
@Controller('files')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        },
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @Post('single')
  @UseInterceptors(FileInterceptor('file', { storage: multer.memoryStorage() }))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Subir un archivo' })
  @ApiResponse({ status: 201, description: 'Archivo subido' })
  async uploadSingle(
    @UploadedFile(new MinSizeValidationPipe()) file: Express.Multer.File,
    @Body('id') id: string,
  ) {
    return this.fileUploadService.saveFile(file, { id });
  }

  @Post('multiple')
  @UseInterceptors(
    FilesInterceptor('files', 10, { storage: multer.memoryStorage() }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Subir múltiples archivos' })
  @ApiResponse({ status: 201, description: 'Archivos subidos' })
  async uploadMultiple(@UploadedFiles() files: Express.Multer.File[]) {
    const results = await Promise.all(
      files.map((f) => this.fileUploadService.saveFile(f)),
    );
    return { files: results };
  }
}
