import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { FileUpload } from 'src/modules/file_upload/entities/file_upload.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
@Entity()
export class CreateUserFileDto {
 
  file: FileUpload;
  user: User
}
