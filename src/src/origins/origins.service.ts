import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { OriginsDto } from 'src/generated/nestjs-dto/origins.dto';
import { UpdateOriginsDto } from 'src/generated/nestjs-dto/update-origins.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class OriginsService extends BaseService<
  OriginsDto,
  OriginsDto,
  UpdateOriginsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.origins);
  }
}
