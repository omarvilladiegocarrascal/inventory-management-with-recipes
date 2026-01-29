import { Module } from '@nestjs/common';
import { RecipeFilesService } from './recipe_files.service';
import { RecipeFilesController } from './recipe_files.controller';

@Module({
  controllers: [RecipeFilesController],
  providers: [RecipeFilesService],
  exports: [RecipeFilesService],
})
export class RecipeFilesModule {}
