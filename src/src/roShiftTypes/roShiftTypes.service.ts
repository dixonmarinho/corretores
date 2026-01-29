import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoShiftTypesDto } from 'src/generated/nestjs-dto/roShiftTypes.dto';
import { UpdateRoShiftTypesDto } from 'src/generated/nestjs-dto/update-roShiftTypes.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoShiftTypesService extends BaseService<
  RoShiftTypesDto,
  RoShiftTypesDto,
  UpdateRoShiftTypesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_shift_types);
  }
}
