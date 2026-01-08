import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { RecipeProduct } from 'src/modules/recipe_products/entities/recipe_product.entity';
import { SellableItem } from 'src/modules/sellable_items/entities/sellable_item.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity({ name: 'recipe' })
export class Recipe {
  @ApiProperty({
    description: 'Unique identifier for the recipe',
    type: 'string',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'Name of the recipe', maxLength: 200 })
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @ApiProperty({
    description: 'Description of the recipe',
    required: false,
    maxLength: 400,
  })
  @Column({ type: 'varchar', length: 400, nullable: true })
  description?: string;

  @ApiProperty({ description: 'Timestamp when the recipe was created' })
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Timestamp when the recipe was last updated' })
  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt?: Date;

  @ApiProperty({
    description: 'List of recipe products associated with this recipe',
    type: () => [RecipeProduct],
  })
  @OneToMany(() => RecipeProduct, (recipeProduct) => recipeProduct.recipe)
  recipeProducts: RecipeProduct[];

  @ApiProperty({
    description: 'Sellable item associated with this recipe',
    type: () => SellableItem,
  })
  @OneToOne(() => SellableItem, (sellableItem) => sellableItem.recipe)
  sellableItem: SellableItem;
}
