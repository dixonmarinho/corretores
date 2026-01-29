import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoDutiesDto } from 'src/generated/nestjs-dto/roDuties.dto';
import { UpdateRoDutiesDto } from 'src/generated/nestjs-dto/update-roDuties.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoDutiesService extends BaseService<
  RoDutiesDto,
  RoDutiesDto,
  UpdateRoDutiesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_duties);
  }
}
