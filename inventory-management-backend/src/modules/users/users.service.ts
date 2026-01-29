import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { CreateUserResponseDto } from './dto/createUserResponsedto';
import { UserFilesService } from '../files/file_upload/files_types/user_files/user_files.service';
import { FileUploadService } from '../files/file_upload/file_upload.service';
import { UserFile } from '../files/file_upload/files_types/user_files/entities/user_file.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private userFilesService: UserFilesService,
    private fileUploadService: FileUploadService,
    private readonly dataSource: DataSource,
  ) {}
  async create(
    createUserDto: CreateUserDto,
    file: Express.Multer.File,
  ): Promise<CreateUserResponseDto> {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      if (!createUserDto.email) {
        throw new BadRequestException('Email is required');
      }

      const passwordHash = bcrypt.hashSync(createUserDto.password, 10);

      /** 1️⃣ Crear usuario */
      const user = queryRunner.manager.create(User, {
        name: createUserDto.name,
        email: createUserDto.email,
        password: passwordHash,
        isActive: true,
      });

      const newUser = await queryRunner.manager.save(user);

      /** 2️⃣ Guardar archivo */
      const newFile = await this.fileUploadService.saveFile(file);

      /** 3️⃣ Relación user-files */
      const userFile = queryRunner.manager.create(UserFile, {
        user: newUser,
        file: newFile,
      });

      await queryRunner.manager.save(userFile);

      /** 4️⃣ Buscar usuario final con relaciones */
      const userFound = await queryRunner.manager.findOne(User, {
        where: { id: newUser.id },
        relations: ['userFiles', 'userFiles.file'],
      });

      if (!userFound) {
        throw new BadRequestException('User not found');
      }

      await queryRunner.commitTransaction();
      return userFound;
    } catch (error: unknown) {
      await queryRunner.rollbackTransaction();

      interface PostgresError {
        code?: string;
        detail?: string;
        constraint?: string;
        message?: string;
      }
      const pgError = error as PostgresError;

      // 🔥 EMAIL DUPLICADO (Postgres)
      if (pgError?.code === '23505') {
        // Check if the constraint is related to the email column
        if (
          pgError?.detail?.includes('email') ||
          pgError?.constraint?.includes('email')
        ) {
          throw new ConflictException('El email ya está registrado');
        }
        // If it's another unique constraint, throw a generic conflict
        throw new ConflictException('El valor ya existe');
      }

      // 🔥 Violación de restricción NOT NULL (Postgres)
      if (pgError?.code === '23502') {
        throw new BadRequestException('Faltan campos requeridos');
      }

      // 🔥 Violación de foreign key (Postgres)
      if (pgError?.code === '23503') {
        throw new BadRequestException('Referencia inválida a otro recurso');
      }

      // 🔥 Check constraint violation (Postgres)
      if (pgError?.code === '23514') {
        throw new BadRequestException('Violación de restricción de integridad');
      }

      // 🔥 Si ya es una excepción HTTP, re-lánzala
      if (error instanceof BadRequestException) {
        throw error;
      }

      // 🔥 Cualquier otro error
      const message =
        error instanceof Error && typeof error.message === 'string'
          ? error.message
          : 'Internal server error';
      throw new InternalServerErrorException(message);
    } finally {
      await queryRunner.release();
    }
  }

  async findAll(): Promise<any> {
    return this.userRepository.find({
      relations: ['userFiles', 'userFiles.file'],
    });
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { email },
      relations: ['userFiles', 'userFiles.file'],
    });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new BadRequestException('User not found');
    }
    return user;
  }

  update(id: number, _updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
