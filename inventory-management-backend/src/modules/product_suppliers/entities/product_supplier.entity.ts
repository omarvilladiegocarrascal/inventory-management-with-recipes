import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'product_suppliers' })
export class ProductSupplier {
  @ApiProperty({ description: 'Product ID', type: String, format: 'uuid' })
  @PrimaryColumn('uuid')
  productId: string;

  @ApiProperty({ description: 'Supplier ID', type: String, format: 'uuid' })
  @PrimaryColumn('uuid')
  supplierId: string;

  @ApiProperty({ description: 'Record creation timestamp', type: String, format: 'date-time' })
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;
}
