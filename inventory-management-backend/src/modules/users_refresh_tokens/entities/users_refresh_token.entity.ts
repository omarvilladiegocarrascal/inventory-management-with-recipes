import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'user_refresh_token' })
export class UsersRefreshToken {
  @ApiProperty({
    description: 'Unique identifier for the refresh token',
    format: 'uuid',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'The refresh token string', maxLength: 200 })
  @Column({ type: 'varchar', length: 500 })
  token: string;

  @ApiProperty({
    description: 'Expiration timestamp of the token',
    format: 'date-time',
  })
  @Column({ type: 'timestamptz', name: 'expired_at' })
  expiredAt: Date;

  @ApiProperty({
    description: 'Revocation timestamp of the token',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  @Column({ type: 'timestamptz', name: 'revoked_at', nullable: true })
  revokedAt: Date | null;

  @ApiProperty({
    description: 'Creation timestamp of the token',
    format: 'date-time',
  })
  @CreateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'NOW()',
  })
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.refreshTokens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
