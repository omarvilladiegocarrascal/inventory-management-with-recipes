import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsEnum, IsNumber, Min, IsOptional } from 'class-validator';
import { User } from 'src/modules/users/entities/user.entity';
import { SaleItem } from 'src/modules/sale_items/entities/sale_item.entity';
import { v4 as uuidv4 } from 'uuid';
export enum SalesType {
  PENDING = 'pending',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
}

@Entity({ name: 'sales' })
export class Sale {
  @ApiProperty({
    description: 'Unique identifier for the sale',
    type: 'string',
    format: 'uuid',
  })
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({
    description: 'Status of the sale',
    enum: SalesType,
    example: SalesType.PENDING,
  })
  @IsEnum(SalesType)
  @Column({ type: 'enum', enum: SalesType, name: 'status' })
  status: SalesType;

  @ApiProperty({
    description: 'Total amount of the sale',
    type: 'number',
    minimum: 0,
    example: 99.99,
  })
  @IsNumber()
  @Min(0)
  @Column({ type: 'decimal', precision: 10, scale: 2, name: 'total_amount' })
  totalAmount: number;

  @ApiProperty({
    description: 'Timestamp when the sale was created',
    type: 'string',
    format: 'date-time',
  })
  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'NOW()',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.sales, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ApiProperty({
    description: 'Items included in the sale',
    type: () => [SaleItem],
  })
  @OneToMany(() => SaleItem, (salesItem) => salesItem.sale, { cascade: true })
  salesItems: SaleItem[];
}
