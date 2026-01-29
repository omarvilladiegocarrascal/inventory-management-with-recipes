import { Test, TestingModule } from '@nestjs/testing';
import { ProductFilesController } from './product_files.controller';
import { ProductFilesService } from './product_files.service';

describe('ProductFilesController', () => {
  let controller: ProductFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductFilesController],
      providers: [ProductFilesService],
    }).compile();

    controller = module.get<ProductFilesController>(ProductFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
