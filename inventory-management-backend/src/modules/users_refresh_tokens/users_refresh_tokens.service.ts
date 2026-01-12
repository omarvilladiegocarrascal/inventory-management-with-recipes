import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { UsersRefreshToken } from './entities/users_refresh_token.entity';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersRefreshTokensService {
  constructor(
    @InjectRepository(UsersRefreshToken)
    private usersRefreshTokenRepository: Repository<UsersRefreshToken>,
    private jwtService: JwtService,
  ) {}

  async create(user: User): Promise<UsersRefreshToken> {
    const payload = { sub: user.id, jti: uuidv4() };
    const token = this.jwtService.sign(payload, {
      expiresIn: '1h',
    });
    const expiredAt = new Date();
    expiredAt.setDate(expiredAt.getDate() + 7);

    

    const refreshToken = this.usersRefreshTokenRepository.create({
      token,
      user,
      expiredAt,
    });

    return this.usersRefreshTokenRepository.save(refreshToken);
  }

  async findByToken(token: string): Promise<UsersRefreshToken | null> {
    return this.usersRefreshTokenRepository.findOne({
      where: { token },
      relations: ['user'],
    });
  }

  async revokeToken(token: string): Promise<void> {
    await this.usersRefreshTokenRepository.update(
      { token },
      { revokedAt: new Date() },
    );
  }

  async revokeAllUserTokens(userId: string): Promise<void> {
    await this.usersRefreshTokenRepository.update(
      { user: { id: userId } },
      { revokedAt: new Date() },
    );
  }

  async deleteExpiredTokens(): Promise<void> {
    await this.usersRefreshTokenRepository
      .createQueryBuilder()
      .delete()
      .where('expired_at < :now', { now: new Date() })
      .execute();
  }
}