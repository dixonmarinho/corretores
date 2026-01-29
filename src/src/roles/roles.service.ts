import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RolesDto } from 'src/generated/nestjs-dto/roles.dto';
import { UpdateRolesDto } from 'src/generated/nestjs-dto/update-roles.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RolesService extends BaseService<
  RolesDto,
  RolesDto,
  UpdateRolesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.roles);
  }
}
