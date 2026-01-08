import { Injectable } from '@nestjs/common';
import { CreateCostPriceDto } from './dto/create-cost_price.dto';
import { UpdateCostPriceDto } from './dto/update-cost_price.dto';

@Injectable()
export class CostPricesService {
  create(createCostPriceDto: CreateCostPriceDto) {
    return 'This action adds a new costPrice';
  }

  findAll() {
    return `This action returns all costPrices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} costPrice`;
  }

  update(id: number, updateCostPriceDto: UpdateCostPriceDto) {
    return `This action updates a #${id} costPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} costPrice`;
  }
}
