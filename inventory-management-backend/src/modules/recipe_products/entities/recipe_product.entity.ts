import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';
@Entity({ name: 'recipe_products' })
export class RecipeProduct {
  @ApiProperty({ description: 'Unique identifier for the recipe product', type: 'string', format: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Quantity of the product in the recipe', minimum: 1 })
  @IsInt()
  @Min(0)
  @Column({ type: 'int' })
  quantity: number;
}
