import { Module } from '@nestjs/common';
import { RecipeProductsService } from './recipe_products.service';
import { RecipeProductsController } from './recipe_products.controller';

@Module({
  controllers: [RecipeProductsController],
  providers: [RecipeProductsService],
})
export class RecipeProductsModule {}
