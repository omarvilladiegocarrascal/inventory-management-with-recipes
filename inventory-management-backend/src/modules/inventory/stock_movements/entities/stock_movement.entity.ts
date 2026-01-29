import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Check,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsEnum, IsUUID } from 'class-validator';
import { User } from 'src/modules/users/entities/user.entity';
import { CostPrice } from 'src/modules/cost_prices/entities/cost_price.entity';
import { v4 as uuidv4 } from 'uuid';
import { Batch } from '../../batches/entities/batch.entity';

export enum MovementTypes {
  IN = 'IN',
  OUT = 'OUT',
  ADJUSTMENT = 'ADJUSTMENT',
}
@Entity('stock_movement')
@Check('quantity <> 0')
export class StockMovement {
  @ApiProperty({ description: 'Unique identifier for the stock movement' })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({
    description: 'Quantity moved (positive for IN, negative for OUT)',
    example: 10,
  })
  @IsInt()
  @IsNotEmpty()
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({ enum: MovementTypes, description: 'Type of movement' })
  @IsEnum(MovementTypes)
  @IsNotEmpty()
  @Column({ type: 'enum', enum: MovementTypes })
  movement_type: MovementTypes;

  @ApiProperty({ description: 'Timestamp when the movement was created' })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'NOW()' })
  created_at: Date;

  @ManyToOne(() => User, (user) => user.stockMovements)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Batch, (batch) => batch.stockMovements, { eager: true })
  @JoinColumn({ name: 'batch_id' })
  batch: Batch;
}
