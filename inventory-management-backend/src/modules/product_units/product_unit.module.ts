import { Module } from '@nestjs/common';
import { ProductUnitService } from './product_unit.service';
import { ProductUnitController } from './product_unit.controller';

@Module({
  controllers: [ProductUnitController],
  providers: [ProductUnitService],
})
export class ProductUnitModule {}
