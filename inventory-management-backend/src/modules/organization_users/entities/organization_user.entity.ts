import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/users/entities/user.entity';
import { Organization } from 'src/modules/organizations/entities/organization.entity';
@Entity()
export class OrganizationUser {
  @ApiProperty({
    description: 'The unique identifier of the organization user',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    description: 'The user associated with this organization user',
  })
  @ManyToOne(() => User, (user) => user.organizationUsers)
  user: User;

  @ApiProperty({
    description: 'The organization associated with this organization user',
  })
  @ManyToOne(
    () => Organization,
    (organization) => organization.organizationUsers,
  )
  organization: Organization;
}
