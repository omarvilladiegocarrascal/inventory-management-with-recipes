import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalePricesService } from './sale_prices.service';
import { CreateSalePriceDto } from './dto/create-sale_price.dto';
import { UpdateSalePriceDto } from './dto/update-sale_price.dto';

@Controller('sale-prices')
export class SalePricesController {
  constructor(private readonly salePricesService: SalePricesService) {}

  @Post()
  create(@Body() createSalePriceDto: CreateSalePriceDto) {
    return this.salePricesService.create(createSalePriceDto);
  }

  @Get()
  findAll() {
    return this.salePricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salePricesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalePriceDto: UpdateSalePriceDto) {
    return this.salePricesService.update(+id, updateSalePriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salePricesService.remove(+id);
  }
}
