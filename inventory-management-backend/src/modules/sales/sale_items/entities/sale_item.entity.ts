import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, Min, IsNumber, IsPositive } from 'class-validator';
import { SellableItem } from '../../sellable_items/entities/sellable_item.entity';
import { v4 as uuidv4 } from 'uuid';
import { Sale } from '../../sales/entities/sale.entity';
@Entity('sales_item')
export class SaleItem {
  @ApiProperty({
    description: 'Unique identifier for the sale item',
    type: 'string',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  id: string = uuidv4();

  @ApiProperty({
    description: 'Quantity of the item sold',
    example: 2,
    minimum: 1,
  })
  @Column({ type: 'int', name: 'quantity' })
  @IsInt()
  @Min(1)
  quantity: number;

  @ApiProperty({
    description: 'Price per unit of the item',
    example: 19.99,
    minimum: 0,
  })
  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'unit_price' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  unitPrice: number;

  @ApiProperty({
    description: 'Total price for this line item',
    example: 39.98,
    minimum: 0,
  })
  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'total_price' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  totalPrice: number;

  @ApiProperty({
    description: 'Sale to which this item belongs',
    type: () => Sale,
  })
  @ManyToOne(() => Sale, (sale) => sale.salesItems, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'sale_id' })
  sale: Sale;

  @ApiProperty({ description: 'Sellable item associated with this sale item' })
  @ManyToOne(() => SellableItem, { eager: true, onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'sellable_item_id' })
  sellable_item: SellableItem;
}
