import { Test, TestingModule } from '@nestjs/testing';
import { SupplierProductService } from './supplier_product.service';

describe('SupplierProductService', () => {
  let service: SupplierProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplierProductService],
    }).compile();

    service = module.get<SupplierProductService>(SupplierProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
