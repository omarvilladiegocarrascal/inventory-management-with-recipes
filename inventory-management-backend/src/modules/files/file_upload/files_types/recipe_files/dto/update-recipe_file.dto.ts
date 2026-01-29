import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeFileDto } from './create-recipe_file.dto';

export class UpdateRecipeFileDto extends PartialType(CreateRecipeFileDto) {}
