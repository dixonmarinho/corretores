import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RpDealQueuesDto } from 'src/generated/nestjs-dto/rpDealQueues.dto';
import { UpdateRpDealQueuesDto } from 'src/generated/nestjs-dto/update-rpDealQueues.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RpDealQueuesService extends BaseService<
  RpDealQueuesDto,
  RpDealQueuesDto,
  UpdateRpDealQueuesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.rp_deal_queues);
  }
}
