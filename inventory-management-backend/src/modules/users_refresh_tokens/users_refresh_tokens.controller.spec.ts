import { Test, TestingModule } from '@nestjs/testing';
import { UsersRefreshTokensController } from './users_refresh_tokens.controller';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';

describe('UsersRefreshTokensController', () => {
  let controller: UsersRefreshTokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRefreshTokensController],
      providers: [UsersRefreshTokensService],
    }).compile();

    controller = module.get<UsersRefreshTokensController>(UsersRefreshTokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
