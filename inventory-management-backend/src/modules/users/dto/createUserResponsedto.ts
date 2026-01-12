import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { v4 as uuidv4 } from 'uuid';
export class CreateUserResponseDto {
  @ApiProperty({
    example: '8c1c3b2e-1c7a-4cdd-9e7b-1f7c8e7d1234',
    description: 'User unique identifier',
  })
  id: string = uuidv4();

  @ApiProperty({
    example: 'Juan Pérez',
    description: 'User full name',
  })
  name: string;

  @ApiProperty({
    example: 'juan@email.com',
    description: 'User email address',
  })
  email: string;

  @ApiProperty({
    example: 'OWNER',
    enum: ['GUEST', 'OWNER', 'ROOT'],
    description: 'User role',
  })
  role: string;

  @ApiProperty({
    example: true,
    description: 'Indicates whether the user is active',
  })
  isActive: boolean;

  @ApiProperty({
    example: '2026-01-08 21:09:01',
    description: 'User creation date (America/Bogota)',
  })
  @Transform(({ value }) =>
    new Date(value).toLocaleString('es-CO', {
      timeZone: 'America/Bogota',
    }),
  )
  createdAt: Date;
}
