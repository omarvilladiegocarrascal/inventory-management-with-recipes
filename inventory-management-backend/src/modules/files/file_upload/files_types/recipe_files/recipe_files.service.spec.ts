import { Test, TestingModule } from '@nestjs/testing';
import { RecipeFilesService } from './recipe_files.service';

describe('RecipeFilesService', () => {
  let service: RecipeFilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeFilesService],
    }).compile();

    service = module.get<RecipeFilesService>(RecipeFilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
