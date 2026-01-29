import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { AgencyFallbackStrategiesDto } from 'src/generated/nestjs-dto/agencyFallbackStrategies.dto';
import { UpdateAgencyFallbackStrategiesDto } from 'src/generated/nestjs-dto/update-agencyFallbackStrategies.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AgencyFallbackStrategiesService extends BaseService<
  AgencyFallbackStrategiesDto,
  AgencyFallbackStrategiesDto,
  UpdateAgencyFallbackStrategiesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.agency_fallback_strategies);
  }
}
