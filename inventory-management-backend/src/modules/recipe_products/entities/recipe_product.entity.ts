import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';
import { Product } from 'src/modules/products/entities/product.entity';
import { Recipe } from 'src/modules/recipe/entities/recipe.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity({ name: 'recipe_products' })
export class RecipeProduct {
  @ApiProperty({
    description: 'Unique identifier for the recipe product',
    type: 'string',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({
    description: 'Quantity of the product in the recipe',
    minimum: 1,
  })
  @IsInt()
  @Min(0)
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({ description: 'Product associated with this recipe product' })
  @ManyToOne(() => Product, (product) => product.recipeProducts, {
    onDelete: 'CASCADE',
  })
  product: Product;

  @ApiProperty({ description: 'Recipe associated with this recipe product' })
  @ManyToOne(() => Recipe, (recipe) => recipe.recipeProducts, {
    onDelete: 'CASCADE',
  })
  recipe: Recipe;
}
