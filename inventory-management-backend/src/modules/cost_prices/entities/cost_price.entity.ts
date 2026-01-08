import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsNumber, IsDateString, IsOptional, Min } from 'class-validator';
@Entity('cost_price')
export class CostPrice {
  @ApiProperty({ description: 'Unique identifier for the cost price record', format: 'uuid' })
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Price value', minimum: 0, example: 99.99 })
  @IsNumber()
  @Min(0)
  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'price' })
  price: number;

  @ApiProperty({ description: 'Start date of the price validity', format: 'date-time' })
  @IsDateString()
  @Column({ type: 'timestamptz', name: 'start_date', default: () => 'now()' })
  startDate: Date;

  @ApiProperty({ description: 'End date of the price validity (optional)', format: 'date-time', required: false })
  @IsOptional()
  @IsDateString()
  @Column({ type: 'timestamptz', name: 'end_date', nullable: true })
  endDate?: Date;
}
