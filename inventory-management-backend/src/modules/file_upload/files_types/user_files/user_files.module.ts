import { Module } from '@nestjs/common';
import { UserFilesService } from './user_files.service';
import { UserFilesController } from './user_files.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFile } from './entities/user_file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFile])],
  controllers: [UserFilesController],
  providers: [UserFilesService],
  exports: [UserFilesService],
})
export class UserFilesModule {}
