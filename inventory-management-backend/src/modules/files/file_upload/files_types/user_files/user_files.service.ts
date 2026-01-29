import { Injectable } from '@nestjs/common';
import { CreateUserFileDto } from './dto/create-user_file.dto';
import { UpdateUserFileDto } from './dto/update-user_file.dto';
import { Repository } from 'typeorm';
import { UserFile } from './entities/user_file.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserFilesService {
  constructor(
    @InjectRepository(UserFile)
    private readonly userFilesRepository: Repository<UserFile>,
  ) {}
  create(createUserFileDto: CreateUserFileDto) {
    const { user, file } = createUserFileDto;
    // TODO: Add logic to create a new user file association
    // Check if the user and file exist
    if (!user || !file) {
      throw new Error('User or file not found');
    }
    const userFile = this.userFilesRepository.create({
      file,
      user,
    });
    return this.userFilesRepository.save(userFile);
    // This could involve checking if the user and file exist,
    // and then creating a new record in the user_files table.
  }

  findAll() {
    return `This action returns all userFiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userFile`;
  }

  update(id: number, updateUserFileDto: UpdateUserFileDto) {
    return `This action updates a #${id} userFile`;
  }

  remove(id: number) {
    return `This action removes a #${id} userFile`;
  }
}
