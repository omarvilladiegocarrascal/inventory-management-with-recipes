import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Roles } from '../auth/decorators/roles.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from '../auth/guards/roles.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { MinSizeValidationPipe } from '../file_upload/pipes/min_size_validation.pipe';
import { CreateUserWithFileDto } from './dto/create-user-file';


@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}


@ApiBody({ type: CreateUserWithFileDto })
  @Post('/create')
  @UseInterceptors(FileInterceptor('file', { storage: multer.memoryStorage() }))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Subir un archivo' })
  @ApiResponse({ status: 201, description: 'Archivo y usuario subido' })
  create(@Body() createUserDto: CreateUserDto, @UploadedFile(new MinSizeValidationPipe()) file: Express.Multer.File ) {
    
    return this.usersService.create(createUserDto, file);
  }

  
  // @UseGuards(AuthGuard('jwt'), RolesGuard)
  // @Roles('OWNER')
  // @ApiBearerAuth()
  @Get('/')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
