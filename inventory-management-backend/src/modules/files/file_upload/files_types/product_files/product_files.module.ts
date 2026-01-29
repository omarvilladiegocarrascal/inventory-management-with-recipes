import { Module } from '@nestjs/common';
import { ProductFilesService } from './product_files.service';
import { ProductFilesController } from './product_files.controller';

@Module({
  controllers: [ProductFilesController],
  providers: [ProductFilesService],
  exports: [ProductFilesService],
})
export class ProductFilesModule {}
