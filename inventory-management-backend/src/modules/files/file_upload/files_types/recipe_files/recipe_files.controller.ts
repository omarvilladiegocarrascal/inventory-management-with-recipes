import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RecipeFilesService } from './recipe_files.service';
import { CreateRecipeFileDto } from './dto/create-recipe_file.dto';
import { UpdateRecipeFileDto } from './dto/update-recipe_file.dto';

@Controller('recipe-files')
export class RecipeFilesController {
  constructor(private readonly recipeFilesService: RecipeFilesService) {}

  @Post()
  create(@Body() createRecipeFileDto: CreateRecipeFileDto) {
    return this.recipeFilesService.create(createRecipeFileDto);
  }

  @Get()
  findAll() {
    return this.recipeFilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeFilesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRecipeFileDto: UpdateRecipeFileDto,
  ) {
    return this.recipeFilesService.update(+id, updateRecipeFileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeFilesService.remove(+id);
  }
}
