import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
import { FileUpload } from '../../../entities/file_upload.entity';
import { User } from 'src/modules/users/entities/user.entity';
@Entity()
export class UserFile {
  @ApiProperty({ description: 'Unique identifier', example: uuidv4() })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({
    type: () => FileUpload,
    description: 'Associated file upload',
  })
  @ManyToOne(() => FileUpload, (fileUpload) => fileUpload.userFiles)
  file: FileUpload;

  @ApiProperty({ type: () => User, description: 'Associated user' })
  @ManyToOne(() => User, (userFile) => userFile.userFiles)
  user: User;
}
