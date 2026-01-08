import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Batch } from 'src/modules/batches/entities/batch.entity';
import { SellableItem } from 'src/modules/sellable_items/entities/sellable_item.entity';
import { RecipeProduct } from 'src/modules/recipe_products/entities/recipe_product.entity';
import { SupplierProduct } from 'src/modules/supplier_product/entities/supplier_product.entity';
import { ProductUnit } from 'src/modules/product_unit/entities/product_unit.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity({ name: 'products' })
export class Product {
  @ApiProperty({
    description: 'Unique identifier for the product',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'Name of the product' })
  @Column({ type: 'varchar' })
  name: string;

  @ApiProperty({ description: 'Barcode of the product', required: false })
  @Column({ type: 'varchar', nullable: true })
  barcode: string | null;

  @ApiProperty({ description: 'Minimum stock level', minimum: 0 })
  @Column({ type: 'int', name: 'minimum_stock' })
  minimumStock: number;

  @ApiProperty({ description: 'Creation timestamp' })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date | null;

  @ApiProperty({
    description: 'Batches associated with this product',
    type: () => [Batch],
  })
  @OneToMany(() => Batch, (batch) => batch.product)
  batches: Batch[];

  @ApiProperty({
    description: 'Sellable item associated with this product',
    type: () => SellableItem,
  })
  @OneToOne(() => SellableItem, (sellableItem) => sellableItem.product)
  sellableItem: SellableItem;

  @ApiProperty({
    description: 'Recipe products associated with this product',
    type: () => [RecipeProduct],
  })
  @OneToMany(() => RecipeProduct, (recipeProduct) => recipeProduct.product)
  recipeProducts: RecipeProduct[];

  @ApiProperty({
    description: 'Supplier products associated with this product',
    type: () => [SupplierProduct],
  })
  @OneToMany(
    () => SupplierProduct,
    (supplierProduct) => supplierProduct.product,
  )
  supplierProducts: SupplierProduct[];

  @ApiProperty({
    description: 'Product units associated with this product',
    type: () => [ProductUnit],
  })
  @OneToMany(() => ProductUnit, (productUnit) => productUnit.product)
  productUnits: ProductUnit[];
}
