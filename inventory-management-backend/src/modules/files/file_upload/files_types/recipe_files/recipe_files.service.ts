import { Injectable } from '@nestjs/common';
import { CreateRecipeFileDto } from './dto/create-recipe_file.dto';
import { UpdateRecipeFileDto } from './dto/update-recipe_file.dto';

@Injectable()
export class RecipeFilesService {
  create(createRecipeFileDto: CreateRecipeFileDto) {
    return 'This action adds a new recipeFile';
  }

  findAll() {
    return `This action returns all recipeFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipeFile`;
  }

  update(id: number, updateRecipeFileDto: UpdateRecipeFileDto) {
    return `This action updates a #${id} recipeFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipeFile`;
  }
}
