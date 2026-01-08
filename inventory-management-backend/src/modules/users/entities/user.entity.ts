import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
export type RoleTypes = 'GUEST' | 'OWNER' | 'ROOT';
import { v4 as uuidv4 } from 'uuid';
import { UsersRefreshToken } from 'src/modules/users_refresh_tokens/entities/users_refresh_token.entity';
import { Sale } from 'src/modules/sales/entities/sale.entity';
import { StockMovement } from 'src/modules/stock_movements/entities/stock_movement.entity';

@Entity({ name: 'users' })
@Unique(['email'])
export class User {
  @ApiProperty({
    description: 'Unique identifier for the user',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({
    description: 'Full name of the user',
    maxLength: 100,
    example: 'John Doe',
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @ApiProperty({
    description: 'Email address of the user',
    maxLength: 100,
    example: 'john.doe@example.com',
  })
  @Column({ type: 'varchar', length: 100, nullable: false })
  email: string;

  @ApiProperty({
    description: 'Hashed password for the user',
    maxLength: 100,
    writeOnly: true,
  })
  @Column({
    name: 'password_hash',
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  passwordHash: string;

  @ApiProperty({
    description: 'Role assigned to the user',
    enum: ['GUEST', 'OWNER', 'ROOT'],
    example: 'GUEST',
  })
  @Column({
    type: 'enum',
    enum: ['GUEST', 'OWNER', 'ROOT'] as RoleTypes[],
    nullable: false,
  })
  role: RoleTypes;

  @ApiProperty({
    description: 'Indicates whether the user account is active',
    default: true,
    example: true,
  })
  @Column({
    name: 'is_active',
    type: 'boolean',
    nullable: false,
    default: true,
  })
  isActive: boolean;

  @ApiProperty({
    description: 'Timestamp when the user was created',
    example: '2023-10-01T12:00:00Z',
  })
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    nullable: false,
    default: () => 'NOW()',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Timestamp when the user was last updated',
    example: '2023-10-02T15:30:00Z',
  })
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    nullable: false,
    default: () => 'NOW()',
  })
  updatedAt: Date;

  @OneToMany(() => UsersRefreshToken, (refreshToken) => refreshToken.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  refreshTokens: UsersRefreshToken[];

  @OneToMany(() => Sale, (sale) => sale.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  sales: Sale[];

  @OneToMany(() => StockMovement, (stockMovement) => stockMovement.user, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  stockMovements: StockMovement[];
}
