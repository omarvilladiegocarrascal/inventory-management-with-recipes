import { Injectable } from '@nestjs/common';
import { CreateSellableItemDto } from './dto/create-sellable_item.dto';
import { UpdateSellableItemDto } from './dto/update-sellable_item.dto';

@Injectable()
export class SellableItemsService {
  create(_createSellableItemDto: CreateSellableItemDto) {
    void _createSellableItemDto;
    return 'This action adds a new sellableItem';
  }

  findAll() {
    return `This action returns all sellableItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sellableItem`;
  }

  update(id: number, _updateSellableItemDto: UpdateSellableItemDto) {
    void _updateSellableItemDto;
    return `This action updates a #${id} sellableItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} sellableItem`;
  }
}
