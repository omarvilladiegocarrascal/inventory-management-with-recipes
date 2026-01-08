import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';
import { CreateUsersRefreshTokenDto } from './dto/create-users_refresh_token.dto';
import { UpdateUsersRefreshTokenDto } from './dto/update-users_refresh_token.dto';

@Controller('users-refresh-tokens')
export class UsersRefreshTokensController {
  constructor(private readonly usersRefreshTokensService: UsersRefreshTokensService) {}

  @Post()
  create(@Body() createUsersRefreshTokenDto: CreateUsersRefreshTokenDto) {
    return this.usersRefreshTokensService.create(createUsersRefreshTokenDto);
  }

  @Get()
  findAll() {
    return this.usersRefreshTokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersRefreshTokensService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersRefreshTokenDto: UpdateUsersRefreshTokenDto) {
    return this.usersRefreshTokensService.update(+id, updateUsersRefreshTokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersRefreshTokensService.remove(+id);
  }
}
