import { Test, TestingModule } from '@nestjs/testing';
import { RecipeFilesController } from './recipe_files.controller';
import { RecipeFilesService } from './recipe_files.service';

describe('RecipeFilesController', () => {
  let controller: RecipeFilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeFilesController],
      providers: [RecipeFilesService],
    }).compile();

    controller = module.get<RecipeFilesController>(RecipeFilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
