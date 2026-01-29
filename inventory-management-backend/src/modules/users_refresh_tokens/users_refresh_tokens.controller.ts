import { Controller } from '@nestjs/common';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';

@Controller('users-refresh-tokens')
export class UsersRefreshTokensController {
  constructor(
    private readonly usersRefreshTokensService: UsersRefreshTokensService,
  ) {}
}
