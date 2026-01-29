import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { FileUploadService } from '../files/file_upload/file_upload.service';
import { UserFilesService } from '../files/file_upload/files_types/user_files/user_files.service';
import { FileUpload } from '../files/file_upload/entities/file_upload.entity';
import { Product } from '../inventory/products/entities/product.entity';
import { Recipe } from '../recipes/recipes/entities/recipe.entity';
import { UserFile } from '../files/file_upload/files_types/user_files/entities/user_file.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, FileUpload, Product, Recipe, UserFile]),
  ],
  controllers: [UsersController],
  providers: [UsersService, FileUploadService, UserFilesService],
  exports: [UsersService],
})
export class UsersModule {}
