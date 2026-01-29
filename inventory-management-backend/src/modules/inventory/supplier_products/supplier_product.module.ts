import { Module } from '@nestjs/common';
import { SupplierProductService } from './supplier_product.service';
import { SupplierProductController } from './supplier_product.controller';

@Module({
  controllers: [SupplierProductController],
  providers: [SupplierProductService],
})
export class SupplierProductModule {}
