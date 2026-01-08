import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostPricesService } from './cost_prices.service';
import { CreateCostPriceDto } from './dto/create-cost_price.dto';
import { UpdateCostPriceDto } from './dto/update-cost_price.dto';

@Controller('cost-prices')
export class CostPricesController {
  constructor(private readonly costPricesService: CostPricesService) {}

  @Post()
  create(@Body() createCostPriceDto: CreateCostPriceDto) {
    return this.costPricesService.create(createCostPriceDto);
  }

  @Get()
  findAll() {
    return this.costPricesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.costPricesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCostPriceDto: UpdateCostPriceDto) {
    return this.costPricesService.update(+id, updateCostPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.costPricesService.remove(+id);
  }
}
