import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RpDealsAgentsDto } from 'src/generated/nestjs-dto/rpDealsAgents.dto';
import { UpdateRpDealsAgentsDto } from 'src/generated/nestjs-dto/update-rpDealsAgents.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RpDealsAgentsService extends BaseService<
  RpDealsAgentsDto,
  RpDealsAgentsDto,
  UpdateRpDealsAgentsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.rp_deals_agents);
  }
}
