import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import typeorm from './config/typeorm';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load:[typeorm]
  }),TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: typeorm,
  }), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
