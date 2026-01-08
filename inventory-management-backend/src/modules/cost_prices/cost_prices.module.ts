import { Module } from '@nestjs/common';
import { CostPricesService } from './cost_prices.service';
import { CostPricesController } from './cost_prices.controller';

@Module({
  controllers: [CostPricesController],
  providers: [CostPricesService],
})
export class CostPricesModule {}
