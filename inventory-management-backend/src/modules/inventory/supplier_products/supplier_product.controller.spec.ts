import { Test, TestingModule } from '@nestjs/testing';
import { SupplierProductController } from './supplier_product.controller';
import { SupplierProductService } from './supplier_product.service';

describe('SupplierProductController', () => {
  let controller: SupplierProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SupplierProductController],
      providers: [SupplierProductService],
    }).compile();

    controller = module.get<SupplierProductController>(
      SupplierProductController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
