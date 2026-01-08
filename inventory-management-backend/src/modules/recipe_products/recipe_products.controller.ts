import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeProductsService } from './recipe_products.service';
import { CreateRecipeProductDto } from './dto/create-recipe_product.dto';
import { UpdateRecipeProductDto } from './dto/update-recipe_product.dto';

@Controller('recipe-products')
export class RecipeProductsController {
  constructor(private readonly recipeProductsService: RecipeProductsService) {}

  @Post()
  create(@Body() createRecipeProductDto: CreateRecipeProductDto) {
    return this.recipeProductsService.create(createRecipeProductDto);
  }

  @Get()
  findAll() {
    return this.recipeProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeProductDto: UpdateRecipeProductDto) {
    return this.recipeProductsService.update(+id, updateRecipeProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeProductsService.remove(+id);
  }
}
