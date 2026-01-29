import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { AgencySettingsDto } from 'src/generated/nestjs-dto/agencySettings.dto';
import { UpdateAgencySettingsDto } from 'src/generated/nestjs-dto/update-agencySettings.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AgencySettingsService extends BaseService<
  AgencySettingsDto,
  AgencySettingsDto,
  UpdateAgencySettingsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.agency_settings);
  }
}
