import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RpLeadsDto } from 'src/generated/nestjs-dto/rpLeads.dto';
import { UpdateRpLeadsDto } from 'src/generated/nestjs-dto/update-rpLeads.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RpLeadsService extends BaseService<
  RpLeadsDto,
  RpLeadsDto,
  UpdateRpLeadsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.rp_leads);
  }
}
