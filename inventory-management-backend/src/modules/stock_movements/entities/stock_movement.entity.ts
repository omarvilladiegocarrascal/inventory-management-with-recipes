import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Check } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsEnum, IsUUID } from 'class-validator';
export enum MovementTypes {
  IN = 'IN',
  OUT = 'OUT',
}

@Entity('stock_movement')
@Check('quantity <> 0')
export class StockMovement {
  @ApiProperty({ description: 'Unique identifier for the stock movement' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Quantity moved (positive for IN, negative for OUT)', example: 10 })
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
}
