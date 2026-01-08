import { Module } from '@nestjs/common';
import { SalePricesService } from './sale_prices.service';
import { SalePricesController } from './sale_prices.controller';

@Module({
  controllers: [SalePricesController],
  providers: [SalePricesService],
})
export class SalePricesModule {}
