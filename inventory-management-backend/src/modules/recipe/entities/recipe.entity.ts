import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'recipe' })
export class Recipe {
  @ApiProperty({ description: 'Unique identifier for the recipe', type: 'string', format: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Name of the recipe', maxLength: 200 })
  @Column({ type: 'varchar', length: 200 })
  name: string;

  @ApiProperty({ description: 'Description of the recipe', required: false, maxLength: 400 })
  @Column({ type: 'varchar', length: 400, nullable: true })
  description?: string;

  @ApiProperty({ description: 'Timestamp when the recipe was created' })
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @ApiProperty({ description: 'Timestamp when the recipe was last updated' })
  @UpdateDateColumn({ type: 'timestamptz', name: 'updated_at', nullable: true })
  updatedAt?: Date;
}
