import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsDateString,
  IsOptional,
  IsNotEmpty,
  MaxLength,
} from 'class-validator';
export class CreateUsersRefreshTokenDto {
  @ApiProperty({ description: 'The refresh token string', maxLength: 200 })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  token: string;

  @ApiProperty({
    description: 'Expiration timestamp of the token',
    format: 'date-time',
  })
  @IsDateString()
  expiredAt: Date;

  @ApiProperty({
    description: 'Revocation timestamp of the token',
    format: 'date-time',
    required: false,
    nullable: true,
  })
  @IsOptional()
  @IsDateString()
  revokedAt?: Date | null;
}
