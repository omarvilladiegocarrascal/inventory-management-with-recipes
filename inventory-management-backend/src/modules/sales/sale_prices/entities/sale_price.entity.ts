import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsNumber,
  IsDateString,
  Min,
  IsOptional,
} from 'class-validator';
import { SellableItem } from '../../sellable_items/entities/sellable_item.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'sales_price' })
export class SalePrice {
  @ApiProperty({ description: 'Unique identifier for the sale price record' })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'Price value, must be non-negative', minimum: 0 })
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Start date of the price validity',
    default: 'now()',
  })
  @Column({ type: 'timestamptz', default: () => 'now()', nullable: false })
  @IsDateString()
  startDate: Date;

  @ApiProperty({
    description: 'End date of the price validity',
    required: false,
  })
  @Column({ type: 'timestamptz', nullable: true })
  @IsOptional()
  @IsDateString()
  endDate?: Date;

  @ApiProperty({ description: 'UUID of the associated sellable item' })
  @Column({ type: 'uuid', nullable: false })
  @IsUUID()
  sellableItemId: string;

  @ApiProperty({ description: 'Associated sellable item' })
  @ManyToOne(() => SellableItem, (sellableItem) => sellableItem.salePrices)
  @JoinColumn({ name: 'sellableItemId' })
  sellableItem: SellableItem;
}
