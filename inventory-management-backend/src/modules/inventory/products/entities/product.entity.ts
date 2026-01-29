import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Batch } from '../../batches/entities/batch.entity';
import { SupplierProduct } from '../../supplier_products/entities/supplier_product.entity';
import { ProductUnit } from '../../product_units/entities/product_unit.entity';
import { v4 as uuidv4 } from 'uuid';
import { SellableItem } from 'src/modules/sales/sellable_items/entities/sellable_item.entity';
import { RecipeProduct } from 'src/modules/recipes/recipe_products/entities/recipe_product.entity';
import { ProductFile } from 'src/modules/files/file_upload/files_types/product_files/entities/product_file.entity';

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

  @ApiProperty({
    description: 'Product files associated with this product',
    type: () => [ProductFile],
  })
  @OneToMany(() => ProductFile, (productFile) => productFile.product)
  productFiles: ProductFile[];
}
