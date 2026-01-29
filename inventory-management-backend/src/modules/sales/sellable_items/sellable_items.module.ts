import { Module } from '@nestjs/common';
import { SellableItemsService } from './sellable_items.service';
import { SellableItemsController } from './sellable_items.controller';

@Module({
  controllers: [SellableItemsController],
  providers: [SellableItemsService],
})
export class SellableItemsModule {}
