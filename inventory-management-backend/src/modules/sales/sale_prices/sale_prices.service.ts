import { Injectable } from '@nestjs/common';
import { CreateSalePriceDto } from './dto/create-sale_price.dto';
import { UpdateSalePriceDto } from './dto/update-sale_price.dto';

@Injectable()
export class SalePricesService {
  create(_createSalePriceDto: CreateSalePriceDto) {
    void _createSalePriceDto;
    return 'This action adds a new salePrice';
  }

  findAll() {
    return `This action returns all salePrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salePrice`;
  }

  update(id: number, _updateSalePriceDto: UpdateSalePriceDto) {
    void _updateSalePriceDto;
    return `This action updates a #${id} salePrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} salePrice`;
  }
}
