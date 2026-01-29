import { Injectable } from '@nestjs/common';
import { CreateProductFileDto } from './dto/create-product_file.dto';
import { UpdateProductFileDto } from './dto/update-product_file.dto';

@Injectable()
export class ProductFilesService {
  create(createProductFileDto: CreateProductFileDto) {
    return 'This action adds a new productFile';
  }

  findAll() {
    return `This action returns all productFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} productFile`;
  }

  update(id: number, updateProductFileDto: UpdateProductFileDto) {
    return `This action updates a #${id} productFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} productFile`;
  }
}
