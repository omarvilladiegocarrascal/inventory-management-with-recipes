import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt, Min, IsDateString, IsString, IsOptional, IsBoolean, IsDate } from 'class-validator';
@Entity({ name: 'batch' })
export class Batch {
  @ApiProperty({ description: 'Unique identifier for the batch', format: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Current quantity in the batch', minimum: 0 })
  @IsInt()
  @Min(0)
  @Column({ type: 'int' })
  quantity: number;

  @ApiProperty({ description: 'Initial quantity when the batch was created', minimum: 1 })
  @IsInt()
  @Min(1)
  @Column({ type: 'int', name: 'initial_quantity' })
  initialQuantity: number;

  @ApiProperty({ description: 'Expiration date of the batch', format: 'date' })
  @IsDateString()
  @Column({ type: 'date', name: 'expiration_date' })
  expirationDate: Date;

  @ApiProperty({ description: 'Optional reference for the batch', maxLength: 200, required: false })
  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', length: 200, nullable: true })
  reference?: string;

  @ApiProperty({ description: 'Indicates if the batch is active' })
  @IsBoolean()
  @Column({ type: 'boolean', name: 'is_active' })
  isActive: boolean;

  @ApiProperty({ description: 'Timestamp when the batch was created', format: 'date-time' })
  @IsDate()
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at', default: () => 'NOW()' })
  createdAt: Date;
}
