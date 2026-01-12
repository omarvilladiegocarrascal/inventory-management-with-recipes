import { SetMetadata } from '@nestjs/common';
import { RoleTypes } from '../../users/types/role.types';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RoleTypes[]) => SetMetadata(ROLES_KEY, roles);
