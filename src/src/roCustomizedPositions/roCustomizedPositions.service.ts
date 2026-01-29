import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoCustomizedPositionsDto } from 'src/generated/nestjs-dto/roCustomizedPositions.dto';
import { UpdateRoCustomizedPositionsDto } from 'src/generated/nestjs-dto/update-roCustomizedPositions.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoCustomizedPositionsService extends BaseService<
  RoCustomizedPositionsDto,
  RoCustomizedPositionsDto,
  UpdateRoCustomizedPositionsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_customized_positions);
  }
}
