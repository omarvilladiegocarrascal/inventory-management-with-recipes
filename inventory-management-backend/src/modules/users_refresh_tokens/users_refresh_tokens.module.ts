import { Module } from '@nestjs/common';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';
import { UsersRefreshTokensController } from './users_refresh_tokens.controller';

@Module({
  controllers: [UsersRefreshTokensController],
  providers: [UsersRefreshTokensService],
})
export class UsersRefreshTokensModule {}
