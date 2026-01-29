import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'product_suppliers' })
export class ProductSupplier {
  @ApiProperty({ description: 'Unique identifier for the product supplier' })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'Product ID', type: String, format: 'uuid' })
  @PrimaryColumn('uuid')
  productId: string;

  @ApiProperty({ description: 'Supplier ID', type: String, format: 'uuid' })
  @PrimaryColumn('uuid')
  supplierId: string;

  @ApiProperty({
    description: 'Record creation timestamp',
    type: String,
    format: 'date-time',
  })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: () => 'NOW()',
  })
  createdAt: Date;
}
