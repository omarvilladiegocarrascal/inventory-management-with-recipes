import { Test, TestingModule } from '@nestjs/testing';
import { CostPricesController } from './cost_prices.controller';
import { CostPricesService } from './cost_prices.service';

describe('CostPricesController', () => {
  let controller: CostPricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostPricesController],
      providers: [CostPricesService],
    }).compile();

    controller = module.get<CostPricesController>(CostPricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
