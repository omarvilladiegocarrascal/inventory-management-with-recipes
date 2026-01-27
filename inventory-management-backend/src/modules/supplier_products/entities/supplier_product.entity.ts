import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/modules/products/entities/product.entity';
import { Supplier } from 'src/modules/suppliers/entities/supplier.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
@Entity()
export class SupplierProduct {
  @ApiProperty({ description: 'Unique identifier for the supplier product' })
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @ManyToOne(() => Supplier, (supplier) => supplier.supplierProducts)
  supplier: Supplier;

  @ManyToOne(() => Product, (product) => product.supplierProducts)
  product: Product;
}
