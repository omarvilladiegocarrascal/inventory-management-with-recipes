import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { FileUpload } from 'src/modules/files/file_upload/entities/file_upload.entity';
import { ProductFile } from 'src/modules/files/file_upload/files_types/product_files/entities/product_file.entity';
import { FileUploadService } from 'src/modules/files/file_upload/file_upload.service';
import { UserFile } from 'src/modules/files/file_upload/files_types/user_files/entities/user_file.entity';
import { UserFilesService } from 'src/modules/files/file_upload/files_types/user_files/user_files.service';
import { ProductFilesService } from 'src/modules/files/file_upload/files_types/product_files/product_files.service';
import { User } from 'src/modules/users/entities/user.entity';
import { Recipe } from 'src/modules/recipes/recipes/entities/recipe.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product,
      FileUpload,
      ProductFile,
      Recipe,
      UserFile,
      User,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, FileUploadService, ProductFilesService],
  exports: [ProductsService],
})
export class ProductsModule {}
