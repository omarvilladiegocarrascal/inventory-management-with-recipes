import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { FileUpload } from '../../../entities/file_upload.entity';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

@Entity('recipe_file')
export class RecipeFile {
  @ApiProperty({ description: 'Unique identifier for the recipe file' })
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @ApiProperty({ description: 'Associated file upload' })
  @ManyToOne(() => FileUpload)
  @JoinColumn({ name: 'file_upload_id' })
  fileUpload: FileUpload;
}
