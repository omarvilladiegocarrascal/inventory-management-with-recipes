import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
export type RoleTypes = 'GUEST' | 'OWNER' | 'ROOT';

export class CreateUserDto {
  @ApiProperty({
    description: 'Full name of the user',
    maxLength: 100,
    example: 'John Doe',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @ApiProperty({
    description: 'Email address of the user',
    maxLength: 100,
    example: 'john.doe@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @MaxLength(100)
  email: string;

  @ApiProperty({
    description: 'Password for the user',
    minLength: 6,
    maxLength: 100,
    writeOnly: true,
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(100)
  password: string;

}
