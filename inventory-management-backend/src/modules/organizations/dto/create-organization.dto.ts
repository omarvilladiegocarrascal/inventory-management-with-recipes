import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Name of the organization',
    maxLength: 100,
    example: 'Acme Inc.',
  })
  name?: string;

  @IsString()
  @IsUUID()
  @ApiProperty({
    description: 'ID of the user',
    maxLength: 100,
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  idUser?: string;
}
