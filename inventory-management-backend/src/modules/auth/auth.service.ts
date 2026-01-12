import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UsersRefreshTokensService } from '../users_refresh_tokens/users_refresh_tokens.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { JWT_SECRET } from '../../helpers/development-env';
import { RefreshUser } from '../users_refresh_tokens/dto/refresh-token.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private usersRefreshTokensService: UsersRefreshTokensService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Revoke all existing refresh tokens for this user
    await this.usersRefreshTokensService.revokeAllUserTokens(user.id);

    // Create new refresh token
    const refreshToken = await this.usersRefreshTokensService.create(user);

    // Generate access token
    const payload = { username: user.email, sub: user.id, role: user.role };
    const accessToken = this.jwtService.sign(payload, { secret: JWT_SECRET });

    return {
      access_token: accessToken,
      refresh_token: refreshToken.token,
      refresh_token_expires_at: refreshToken.expiredAt,
      user,
    };
  }

  async refreshToken(refreshTokenDto: RefreshUser) {
    const { refreshUserDto } = refreshTokenDto;

    // Find the refresh token
    const tokenRecord = await this.usersRefreshTokensService.findByToken(refreshUserDto);
    if (!tokenRecord) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    // Check if token is expired
    if (tokenRecord.expiredAt < new Date()) {
      throw new UnauthorizedException('Refresh token has expired');
    }

    // Check if token is revoked
    if (tokenRecord.revokedAt) {
      throw new UnauthorizedException('Refresh token has been revoked');
    }

    // Revoke the current refresh token
    await this.usersRefreshTokensService.revokeToken(refreshUserDto);

    // Create new refresh token
    const newRefreshToken = await this.usersRefreshTokensService.create(tokenRecord.user);

    // Generate new access token
    const payload = { 
      username: tokenRecord.user.email, 
      sub: tokenRecord.user.id, 
      role: tokenRecord.user.role 
    };
    const accessToken = this.jwtService.sign(payload, { secret: JWT_SECRET });

    return {
      access_token: accessToken,
      refresh_token: newRefreshToken.token,
      refresh_token_expires_at: newRefreshToken.expiredAt,
      user: tokenRecord.user,
    };
  }

  async logout(refreshToken: string) {
    await this.usersRefreshTokensService.revokeToken(refreshToken);
    return { message: 'Logged out successfully' };
  }
}