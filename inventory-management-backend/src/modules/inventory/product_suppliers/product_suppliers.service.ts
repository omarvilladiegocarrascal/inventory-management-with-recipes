import { Injectable } from '@nestjs/common';
import { CreateProductSupplierDto } from './dto/create-product_supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product_supplier.dto';

@Injectable()
export class ProductSuppliersService {
  create(createProductSupplierDto: CreateProductSupplierDto) {
    return 'This action adds a new productSupplier';
  }

  findAll() {
    return `This action returns all productSuppliers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productSupplier`;
  }

  update(id: number, updateProductSupplierDto: UpdateProductSupplierDto) {
    return `This action updates a #${id} productSupplier`;
  }

  remove(id: number) {
    return `This action removes a #${id} productSupplier`;
  }
}
