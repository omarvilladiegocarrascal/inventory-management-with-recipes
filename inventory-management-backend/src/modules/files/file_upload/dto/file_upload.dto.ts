import { ApiProperty } from '@nestjs/swagger';

export class FileUploadDto {
  @ApiProperty({ type: 'string', format: 'binary' })
  file: any;

  @ApiProperty({ type: 'string', enum: ['user', 'recipe', 'product'] })
  type: 'user' | 'recipe' | 'product';
}
