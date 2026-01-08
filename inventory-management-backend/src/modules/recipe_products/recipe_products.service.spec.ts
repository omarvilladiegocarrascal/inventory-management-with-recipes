import { Test, TestingModule } from '@nestjs/testing';
import { RecipeProductsService } from './recipe_products.service';

describe('RecipeProductsService', () => {
  let service: RecipeProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeProductsService],
    }).compile();

    service = module.get<RecipeProductsService>(RecipeProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
