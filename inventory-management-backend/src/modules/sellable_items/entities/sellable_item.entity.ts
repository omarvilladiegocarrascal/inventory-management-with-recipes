import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Check, ManyToOne, JoinColumn } from 'typeorm';
import { IsUUID, IsBoolean, IsOptional, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'sellable_item' })
@Check(
  '"product_id" IS NOT NULL AND "recipe_id" IS NULL OR "product_id" IS NULL AND "recipe_id" IS NOT NULL'
)
export class SellableItem {
  @ApiProperty({ description: 'Unique identifier for the sellable item', type: 'string', format: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Indicates if the sellable item is active', default: true })
  @IsBoolean()
  @Column({ type: 'boolean', default: true })
  is_active: boolean;

  @ApiProperty({ description: 'Creation timestamp', type: 'string', format: 'date-time' })
  @CreateDateColumn({ type: 'timestamptz', default: () => 'NOW()' })
  created_at: Date;

  
}
