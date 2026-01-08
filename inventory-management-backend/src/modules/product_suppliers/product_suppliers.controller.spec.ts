import { Test, TestingModule } from '@nestjs/testing';
import { ProductSuppliersController } from './product_suppliers.controller';
import { ProductSuppliersService } from './product_suppliers.service';

describe('ProductSuppliersController', () => {
  let controller: ProductSuppliersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSuppliersController],
      providers: [ProductSuppliersService],
    }).compile();

    controller = module.get<ProductSuppliersController>(
      ProductSuppliersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
