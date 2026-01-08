import { Module } from '@nestjs/common';
import { ProductSuppliersService } from './product_suppliers.service';
import { ProductSuppliersController } from './product_suppliers.controller';

@Module({
  controllers: [ProductSuppliersController],
  providers: [ProductSuppliersService],
})
export class ProductSuppliersModule {}
