import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  IsUUID,
  IsInt,
  Min,
  IsDateString,
  IsString,
  IsOptional,
  IsBoolean,
  IsDate,
} from 'class-validator';
import { StockMovement } from '../../stock_movements/entities/stock_movement.entity';
import { Product } from '../../products/entities/product.entity';
import { v4 as uuidv4 } from 'uuid';
import { CostPrice } from 'src/modules/cost_prices/entities/cost_price.entity';
@Entity({ name: 'batch' })
export class Batch {
  @ApiProperty({
    description: 'Unique identifier for the batch',
    format: 'uuid',
  })
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'Current quantity in the batch', minimum: 0 })
  @IsInt()
  @Min(0)
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({
    description: 'Initial quantity when the batch was created',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  @Column({ type: 'int', name: 'initial_quantity' })
  initialQuantity: number;

  @ApiProperty({ description: 'Expiration date of the batch', format: 'date' })
  @IsDateString()
  @Column({ type: 'date', name: 'expiration_date' })
  expirationDate: Date;

  @ApiProperty({
    description: 'Optional reference for the batch',
    maxLength: 200,
    required: false,
  })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 200, nullable: true })
  reference?: string;

  @ApiProperty({ description: 'Indicates if the batch is active' })
  @IsBoolean()
  @Column({ type: 'boolean', name: 'is_active' })
  isActive: boolean;

  @ApiProperty({
    description: 'Timestamp when the batch was created',
    format: 'date-time',
  })
  @IsDate()
  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'NOW()',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Stock movements associated with this batch',
    type: () => [StockMovement],
  })
  @OneToMany(() => StockMovement, (stockMovement) => stockMovement.batch)
  stockMovements: StockMovement[];

  @ApiProperty({
    description: 'Product associated with this batch',
    type: () => Product,
  })
  @ManyToOne(() => Product, (product) => product.batches, {
    onDelete: 'CASCADE',
  })
  product: Product;

  @ApiProperty({
    description: 'Cost prices associated with this batch',
    type: () => [CostPrice],
  })
  @OneToMany(() => CostPrice, (costPrice) => costPrice.batch)
  costPrices: CostPrice[];
}
