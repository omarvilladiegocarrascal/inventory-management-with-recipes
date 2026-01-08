import { Test, TestingModule } from '@nestjs/testing';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';

describe('UsersRefreshTokensService', () => {
  let service: UsersRefreshTokensService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRefreshTokensService],
    }).compile();

    service = module.get<UsersRefreshTokensService>(UsersRefreshTokensService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
