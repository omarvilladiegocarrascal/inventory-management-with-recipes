import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsNumber, Min, IsOptional } from 'class-validator';
export enum SalesType {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity({ name: 'sales' })
export class Sale {
  @ApiProperty({ description: 'Unique identifier for the sale', type: 'string', format: 'uuid' })
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Status of the sale', enum: SalesType, example: SalesType.PENDING })
  @IsEnum(SalesType)
  @Column({ type: 'enum', enum: SalesType, name: 'status' })
  status: SalesType;

  @ApiProperty({ description: 'Total amount of the sale', type: 'number', minimum: 0, example: 99.99 })
  @IsNumber()
  @Min(0)
  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'total_amount' })
  totalAmount: number;

  @ApiProperty({ description: 'User ID associated with the sale', type: 'string', format: 'uuid', required: false })
  @IsUUID()
  @IsOptional()
  @Column({ type: 'uuid', name: 'user_id', nullable: true })
  userId?: string;

  @ApiProperty({ description: 'Timestamp when the sale was created', type: 'string', format: 'date-time' })
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'NOW()' })
  createdAt: Date;
}
