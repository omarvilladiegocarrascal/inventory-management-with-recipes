import { Test, TestingModule } from '@nestjs/testing';
import { CostPricesService } from './cost_prices.service';

describe('CostPricesService', () => {
  let service: CostPricesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostPricesService],
    }).compile();

    service = module.get<CostPricesService>(CostPricesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
