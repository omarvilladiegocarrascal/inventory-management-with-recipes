import { Test, TestingModule } from '@nestjs/testing';
import { SellableItemsService } from './sellable_items.service';

describe('SellableItemsService', () => {
  let service: SellableItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SellableItemsService],
    }).compile();

    service = module.get<SellableItemsService>(SellableItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
