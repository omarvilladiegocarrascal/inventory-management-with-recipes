import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';
import { ProductFile } from '../files_types/product_files/entities/product_file.entity';
import { RecipeFile } from '../files_types/recipe_files/entities/recipe_file.entity';
import { UserFile } from '../files_types/user_files/entities/user_file.entity';

@Entity({ name: 'file_uploads' })
export class FileUpload {
  @ApiProperty({ description: 'ID único del archivo', format: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv4();

  @ApiProperty({ description: 'Nombre original' })
  @Column({ type: 'varchar', length: 255 })
  originalName: string;

  @ApiProperty({ description: 'Nombre almacenado' })
  @Column({ type: 'varchar', length: 255 })
  filename: string;

  @ApiProperty({ description: 'Tipo MIME' })
  @Column({ type: 'varchar', length: 100 })
  mimeType: string;

  @ApiProperty({ description: 'Tamaño en bytes' })
  @Column({ type: 'int' })
  size: number;

  @ApiProperty({ description: 'Ruta relativa en disco' })
  @Column({ type: 'varchar', length: 500 })
  path: string;

  @ApiProperty({ description: 'URL pública', required: false, nullable: true })
  @Column({ type: 'varchar', length: 500, nullable: true })
  url: string | null;

  @ApiProperty({ description: 'Fecha de creación', format: 'date-time' })
  @CreateDateColumn({ type: 'timestamptz', name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    description: 'Relación con productos',
    type: () => [ProductFile],
  })
  @OneToMany(() => ProductFile, (product) => product.file)
  productFiles: ProductFile[];

  @ApiProperty({
    description: 'Relación con productos',
    type: () => [ProductFile],
  })
  @OneToMany(() => RecipeFile, (recipe) => recipe.fileUpload)
  recipeFiles: RecipeFile[];

  @ApiProperty({ description: 'Relación con usuarios', type: () => [UserFile] })
  @OneToMany(() => UserFile, (user) => user.file)
  userFiles: UserFile[];
}
