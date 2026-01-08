import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'products' })
export class Product {
  @ApiProperty({ description: 'Unique identifier for the product', format: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp' })
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', nullable: true })
  updatedAt: Date | null;
}
