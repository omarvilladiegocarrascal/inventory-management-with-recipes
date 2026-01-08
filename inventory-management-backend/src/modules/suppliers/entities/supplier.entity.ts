import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'suppliers' })
export class Supplier {
  @ApiProperty({ description: 'Unique identifier for the supplier' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Name of the supplier', maxLength: 150 })
  @Column({ length: 150, nullable: false })
  name: string;

  @ApiProperty({ description: 'Email address of the supplier', required: false, maxLength: 150 })
  @Column({ length: 150, nullable: true, unique: true })
  email?: string;

  @ApiProperty({ description: 'Phone number of the supplier', required: false, maxLength: 50 })
  @Column({ length: 50, nullable: true })
  phone?: string;

  @ApiProperty({ description: 'Indicates if the supplier is active', default: true })
  @Column({ name: 'is_active', type: 'boolean', default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Timestamp when the supplier was created' })
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz', default: () => 'NOW()' })
  createdAt: Date;

  @ApiProperty({ description: 'Timestamp when the supplier was last updated' })
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz', default: () => 'NOW()', onUpdate: 'NOW()' })
  updatedAt: Date;
}
