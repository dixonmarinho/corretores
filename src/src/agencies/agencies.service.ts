import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { AgenciesDto } from 'src/generated/nestjs-dto/agencies.dto';
import { UpdateAgenciesDto } from 'src/generated/nestjs-dto/update-agencies.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AgenciesService extends BaseService<
  AgenciesDto,
  AgenciesDto,
  UpdateAgenciesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.agencies);
  }
}
