import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoDutyPositionsDto } from 'src/generated/nestjs-dto/roDutyPositions.dto';
import { UpdateRoDutyPositionsDto } from 'src/generated/nestjs-dto/update-roDutyPositions.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoDutyPositionsService extends BaseService<
  RoDutyPositionsDto,
  RoDutyPositionsDto,
  UpdateRoDutyPositionsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_duty_positions);
  }
}
