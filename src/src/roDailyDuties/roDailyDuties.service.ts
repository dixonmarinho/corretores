import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoDailyDutiesDto } from 'src/generated/nestjs-dto/roDailyDuties.dto';
import { UpdateRoDailyDutiesDto } from 'src/generated/nestjs-dto/update-roDailyDuties.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoDailyDutiesService extends BaseService<
  RoDailyDutiesDto,
  RoDailyDutiesDto,
  UpdateRoDailyDutiesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_daily_duties);
  }
}
