import { PartialType } from '@nestjs/mapped-types';
import { CreateProductFileDto } from './create-product_file.dto';

export class UpdateProductFileDto extends PartialType(CreateProductFileDto) {}
