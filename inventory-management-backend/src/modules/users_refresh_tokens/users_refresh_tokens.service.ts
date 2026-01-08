import { Injectable } from '@nestjs/common';
import { CreateUsersRefreshTokenDto } from './dto/create-users_refresh_token.dto';
import { UpdateUsersRefreshTokenDto } from './dto/update-users_refresh_token.dto';

@Injectable()
export class UsersRefreshTokensService {
  create(createUsersRefreshTokenDto: CreateUsersRefreshTokenDto) {
    return 'This action adds a new usersRefreshToken';
  }

  findAll() {
    return `This action returns all usersRefreshTokens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersRefreshToken`;
  }

  update(id: number, updateUsersRefreshTokenDto: UpdateUsersRefreshTokenDto) {
    return `This action updates a #${id} usersRefreshToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersRefreshToken`;
  }
}
