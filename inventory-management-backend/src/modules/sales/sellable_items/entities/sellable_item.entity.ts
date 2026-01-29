import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Check,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { SaleItem } from '../../sale_items/entities/sale_item.entity';
import { SalePrice } from '../../sale_prices/entities/sale_price.entity';
import { v4 as uuidv4 } from 'uuid';
import { Product } from 'src/modules/inventory/products/entities/product.entity';
import { Recipe } from 'src/modules/recipes/recipes/entities/recipe.entity';
@Entity({ name: 'sellable_item' })
@Check(
  '"product_id" IS NOT NULL AND "recipe_id" IS NULL OR "product_id" IS NULL AND "recipe_id" IS NOT NULL',
)
export class SellableItem {
  @ApiProperty({
    description: 'Unique identifier for the sellable item',
    type: 'string',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({
    description: 'Indicates if the sellable item is active',
    default: true,
  })
  @IsBoolean()
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @ApiProperty({
    description: 'Creation timestamp',
    type: 'string',
    format: 'date-time',
  })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'NOW()' })
  created_at: Date;

  @ApiProperty({
    description: 'Sales items associated with this sellable item',
  })
  @OneToMany(() => SaleItem, (saleItem) => saleItem.sellable_item)
  sales_items: SaleItem[];

  @ApiProperty({
    description: 'Sales prices associated with this sellable item',
  })
  @OneToMany(() => SalePrice, (salesPrice) => salesPrice.sellableItem)
  salePrices: SalePrice[];

  @ApiProperty({ description: 'Product associated with this sellable item' })
  @OneToOne(() => Product, (product) => product.sellableItem)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ApiProperty({ description: 'Recipe associated with this sellable item' })
  @OneToOne(() => Recipe, (recipe) => recipe.sellableItem)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;
}
