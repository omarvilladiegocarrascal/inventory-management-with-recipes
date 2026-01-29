import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUploadService } from './file_upload.service';
import { FileUploadController } from './file_upload.controller';
import { FileUpload } from './entities/file_upload.entity';
import { UserFilesModule } from './files_types/user_files/user_files.module';
import { ProductFilesModule } from './files_types/product_files/product_files.module';
import { RecipeFilesModule } from './files_types/recipe_files/recipe_files.module';
import { Recipe } from 'src/modules/recipes/recipes/entities/recipe.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Product } from 'src/modules/inventory/products/entities/product.entity';
import { CloudinaryConfig } from 'src/config/cloudinary';

@Module({
  imports: [
    TypeOrmModule.forFeature([FileUpload, User, Recipe, Product]),
    UserFilesModule,
    ProductFilesModule,
    RecipeFilesModule,
  ],
  controllers: [FileUploadController],
  providers: [FileUploadService, CloudinaryConfig],
  exports: [FileUploadService],
})
export class FileUploadModule {}
