import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersRefreshTokensService } from './users_refresh_tokens.service';
import { CreateUsersRefreshTokenDto } from './dto/create-users_refresh_token.dto';
import { UpdateUsersRefreshTokenDto } from './dto/update-users_refresh_token.dto';

@Controller('users-refresh-tokens')
export class UsersRefreshTokensController {
  constructor(
    private readonly usersRefreshTokensService: UsersRefreshTokensService,
  ) {}


}
