import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'units' })
export class Unit {
  @ApiProperty({ description: 'Unique identifier for the unit', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name of the unit', example: 'Kilogram' })
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @ApiProperty({ description: 'Abbreviation or symbol for the unit', example: 'kg' })
  @Column({ type: 'varchar', length: 20, nullable: true })
  abbreviation?: string;

  @ApiProperty({ description: 'Description of the unit', example: 'Unit of mass in the metric system', required: false })
  @Column({ type: 'text', nullable: true })
  description?: string;

  @ApiProperty({ description: 'Indicates if the unit is active', example: true })
  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Creation timestamp', example: '2023-10-01T12:00:00.000Z' })
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @ApiProperty({ description: 'Last update timestamp', example: '2023-10-01T12:00:00.000Z' })
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
