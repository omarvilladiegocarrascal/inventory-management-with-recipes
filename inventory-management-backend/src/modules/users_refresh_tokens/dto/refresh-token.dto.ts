
import { ApiProperty } from '@nestjs/swagger';

export class RefreshUser {

  @ApiProperty({ description: 'Refresh user DTO string' })
  refreshUserDto: string;
}
