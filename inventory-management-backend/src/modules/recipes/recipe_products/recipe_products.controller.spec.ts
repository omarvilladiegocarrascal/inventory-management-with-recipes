import { Test, TestingModule } from '@nestjs/testing';
import { RecipeProductsController } from './recipe_products.controller';
import { RecipeProductsService } from './recipe_products.service';

describe('RecipeProductsController', () => {
  let controller: RecipeProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeProductsController],
      providers: [RecipeProductsService],
    }).compile();

    controller = module.get<RecipeProductsController>(RecipeProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
