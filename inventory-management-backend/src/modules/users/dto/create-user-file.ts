
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class CreateUserWithFileDto extends CreateUserDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'User profile file',
  })
  file: Express.Multer.File;
}
