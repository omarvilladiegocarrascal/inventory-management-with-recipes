import { Test, TestingModule } from '@nestjs/testing';
import { SalePricesController } from './sale_prices.controller';
import { SalePricesService } from './sale_prices.service';

describe('SalePricesController', () => {
  let controller: SalePricesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalePricesController],
      providers: [SalePricesService],
    }).compile();

    controller = module.get<SalePricesController>(SalePricesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
