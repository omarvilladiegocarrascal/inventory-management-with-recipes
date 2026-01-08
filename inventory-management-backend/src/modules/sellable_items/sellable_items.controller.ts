import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SellableItemsService } from './sellable_items.service';
import { CreateSellableItemDto } from './dto/create-sellable_item.dto';
import { UpdateSellableItemDto } from './dto/update-sellable_item.dto';

@Controller('sellable-items')
export class SellableItemsController {
  constructor(private readonly sellableItemsService: SellableItemsService) {}

  @Post()
  create(@Body() createSellableItemDto: CreateSellableItemDto) {
    return this.sellableItemsService.create(createSellableItemDto);
  }

  @Get()
  findAll() {
    return this.sellableItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellableItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellableItemDto: UpdateSellableItemDto) {
    return this.sellableItemsService.update(+id, updateSellableItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellableItemsService.remove(+id);
  }
}
