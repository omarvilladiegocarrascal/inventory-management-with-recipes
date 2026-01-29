import { Module } from '@nestjs/common';
import { OrganizationUsersService } from './organization_users.service';
import { OrganizationUsersController } from './organization_users.controller';

@Module({
  controllers: [OrganizationUsersController],
  providers: [OrganizationUsersService],
})
export class OrganizationUsersModule {}
