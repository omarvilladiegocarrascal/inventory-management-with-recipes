import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationUsersController } from './organization_users.controller';
import { OrganizationUsersService } from './organization_users.service';

describe('OrganizationUsersController', () => {
  let controller: OrganizationUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationUsersController],
      providers: [OrganizationUsersService],
    }).compile();

    controller = module.get<OrganizationUsersController>(
      OrganizationUsersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
