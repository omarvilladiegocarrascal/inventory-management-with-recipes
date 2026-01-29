import { Injectable } from '@nestjs/common';
import { CreateOrganizationUserDto } from './dto/create-organization_user.dto';
import { UpdateOrganizationUserDto } from './dto/update-organization_user.dto';

@Injectable()
export class OrganizationUsersService {
  create(_createOrganizationUserDto: CreateOrganizationUserDto) {
    void _createOrganizationUserDto;
    return 'This action adds a new organizationUser';
  }

  findAll() {
    return `This action returns all organizationUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} organizationUser`;
  }

  update(id: number, _updateOrganizationUserDto: UpdateOrganizationUserDto) {
    void _updateOrganizationUserDto;
    return `This action updates a #${id} organizationUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} organizationUser`;
  }
}
