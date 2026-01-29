import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/modules/inventory/products/entities/product.entity';
import { FileUpload } from '../../../entities/file_upload.entity';
@Entity('product_file')
export class ProductFile {
  @ApiProperty({ description: 'Unique identifier for the product file' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    type: () => FileUpload,
    description: 'Associated file upload',
  })
  @ManyToOne(() => FileUpload, (fileUpload) => fileUpload.productFiles)
  file: FileUpload;

  @ApiProperty({
    type: () => Product,
    description: 'Associated FileUpload entity',
  })
  @ManyToOne(() => Product, (product) => product.productFiles, {})
  product: Product;
}
