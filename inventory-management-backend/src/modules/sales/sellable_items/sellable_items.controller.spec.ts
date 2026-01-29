import { Test, TestingModule } from '@nestjs/testing';
import { SellableItemsController } from './sellable_items.controller';
import { SellableItemsService } from './sellable_items.service';

describe('SellableItemsController', () => {
  let controller: SellableItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SellableItemsController],
      providers: [SellableItemsService],
    }).compile();

    controller = module.get<SellableItemsController>(SellableItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
