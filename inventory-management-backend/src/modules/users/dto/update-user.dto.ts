import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MaxLength,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import type { RoleTypes } from '../entities/user.entity';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    description: 'Full name of the user',
    maxLength: 100,
    example: 'Mary James',
  })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Email address of the user',
    maxLength: 100,
    example: 'mary.james@example.com',
  })
  @IsEmail()
  @MaxLength(100)
  @IsOptional()
  email?: string;

  @ApiPropertyOptional({
    description: 'Hashed password for the user',
    maxLength: 100,
    writeOnly: true,
  })
  @IsString()
  @MaxLength(100)
  @IsOptional()
  passwordHash?: string;

  @ApiPropertyOptional({
    description: 'Role assigned to the user',
    enum: ['GUEST', 'OWNER', 'ROOT'],
    example: 'GUEST',
  })
  @IsEnum(['GUEST', 'OWNER', 'ROOT'] as RoleTypes[])
  @IsOptional()
  role?: RoleTypes;

  @ApiPropertyOptional({
    description: 'Indicates whether the user account is active',
    default: true,
    example: true,
  })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}
