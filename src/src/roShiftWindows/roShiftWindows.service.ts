import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoShiftWindowsDto } from 'src/generated/nestjs-dto/roShiftWindows.dto';
import { UpdateRoShiftWindowsDto } from 'src/generated/nestjs-dto/update-roShiftWindows.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoShiftWindowsService extends BaseService<
  RoShiftWindowsDto,
  RoShiftWindowsDto,
  UpdateRoShiftWindowsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_shift_windows);
  }
}
