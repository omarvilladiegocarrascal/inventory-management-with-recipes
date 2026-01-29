import { Module } from '@nestjs/common';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';
import { UsersRefreshTokensController } from './users_refresh_tokens.controller';
import { UsersRefreshToken } from './entities/users_refresh_token.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersRefreshToken]),
    JwtModule.register({
      secret: process.env.JWT_REFRESH_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [UsersRefreshTokensController],
  providers: [UsersRefreshTokensService],
})
export class UsersRefreshTokensModule {}
