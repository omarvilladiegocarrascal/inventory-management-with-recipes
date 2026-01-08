import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeProductDto } from './create-recipe_product.dto';

export class UpdateRecipeProductDto extends PartialType(
  CreateRecipeProductDto,
) {}
