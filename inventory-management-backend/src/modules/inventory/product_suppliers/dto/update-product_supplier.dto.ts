import { PartialType } from '@nestjs/mapped-types';
import { CreateProductSupplierDto } from './create-product_supplier.dto';

export class UpdateProductSupplierDto extends PartialType(
  CreateProductSupplierDto,
) {}
