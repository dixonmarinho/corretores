import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoDutyWindowsDto } from 'src/generated/nestjs-dto/roDutyWindows.dto';
import { UpdateRoDutyWindowsDto } from 'src/generated/nestjs-dto/update-roDutyWindows.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoDutyWindowsService extends BaseService<
  RoDutyWindowsDto,
  RoDutyWindowsDto,
  UpdateRoDutyWindowsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_duty_windows);
  }
}
