import { Injectable } from '@nestjs/common';
import { CreateSaleItemDto } from './dto/create-sale_item.dto';
import { UpdateSaleItemDto } from './dto/update-sale_item.dto';

@Injectable()
export class SaleItemsService {
  create(_createSaleItemDto: CreateSaleItemDto) {
    void _createSaleItemDto;
    return 'This action adds a new saleItem';
  }

  findAll() {
    return `This action returns all saleItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} saleItem`;
  }

  update(id: number, _updateSaleItemDto: UpdateSaleItemDto) {
    void _updateSaleItemDto;
    return `This action updates a #${id} saleItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} saleItem`;
  }
}
