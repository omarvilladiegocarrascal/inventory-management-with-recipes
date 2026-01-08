import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsOptional, IsDateString, MaxLength } from 'class-validator';

export class UpdateUsersRefreshTokenDto {
  @ApiPropertyOptional({
    description: 'The refresh token string',
    maxLength: 200,
  })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  token?: string;

  @ApiPropertyOptional({
    description: 'Expiration timestamp of the token',
    format: 'date-time',
  })
  @IsOptional()
  @IsDateString()
  expiredAt?: Date;

  @ApiPropertyOptional({
    description: 'Revocation timestamp of the token',
    format: 'date-time',
    nullable: true,
  })
  @IsOptional()
  @IsDateString()
  revokedAt?: Date | null;
}
