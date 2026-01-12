import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserResponseDto } from './dto/createUserResponsedto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async create(createUserDto: CreateUserDto): Promise<CreateUserResponseDto> {

    if(!createUserDto.email) {
      throw new BadRequestException('Email is required');
    }

    if (!createUserDto.role) {
      createUserDto.role = 'GUEST';
    }
    const passwordHash = bcrypt.hashSync(createUserDto.password, 10);

    const user: CreateUserDto = this.userRepository.create(
     {
        name: createUserDto.name,
        email: createUserDto.email,
        password: passwordHash,
        role: createUserDto.role,
        isActive: true,
     }
    );
    
    const newUser = await this.userRepository.save(user)
    const userResponse: CreateUserResponseDto = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      isActive: newUser.isActive,
      createdAt: new Date(newUser.createdAt.getTime() - 5 * 60 * 60 * 1000),
    }
    return userResponse;

  }

  async findAll(): Promise<User[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string): Promise<User | undefined> {
    
    try {
      const user = await this.userRepository.findOne({ where: { email } });
      if(!user) {
        throw new BadRequestException('User not found');
      }
      return user;
    } catch (error) {
      throw error;
    }
    
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
