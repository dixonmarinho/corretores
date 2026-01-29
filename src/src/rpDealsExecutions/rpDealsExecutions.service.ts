import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RpDealsExecutionsDto } from 'src/generated/nestjs-dto/rpDealsExecutions.dto';
import { UpdateRpDealsExecutionsDto } from 'src/generated/nestjs-dto/update-rpDealsExecutions.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RpDealsExecutionsService extends BaseService<
  RpDealsExecutionsDto,
  RpDealsExecutionsDto,
  UpdateRpDealsExecutionsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.rp_deals_executions);
  }
}
