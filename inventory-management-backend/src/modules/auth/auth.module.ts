import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from '../../helpers/development-env';
import { UsersRefreshTokensModule } from '../users_refresh_tokens/users_refresh_tokens.module';
import { UsersRefreshTokensService } from '../users_refresh_tokens/users_refresh_tokens.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRefreshToken } from '../users_refresh_tokens/entities/users_refresh_token.entity';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    UsersRefreshTokensModule,
    JwtModule.register({
      secret: JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
    TypeOrmModule.forFeature([UsersRefreshToken]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UsersRefreshTokensService],
  exports: [AuthService],
})
export class AuthModule {}
