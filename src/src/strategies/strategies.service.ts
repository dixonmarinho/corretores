import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { StrategiesDto } from 'src/generated/nestjs-dto/strategies.dto';
import { UpdateStrategiesDto } from 'src/generated/nestjs-dto/update-strategies.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class StrategiesService extends BaseService<
  StrategiesDto,
  StrategiesDto,
  UpdateStrategiesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.strategies);
  }
}
