import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RoCustomizedQueuesDto } from 'src/generated/nestjs-dto/roCustomizedQueues.dto';
import { UpdateRoCustomizedQueuesDto } from 'src/generated/nestjs-dto/update-roCustomizedQueues.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RoCustomizedQueuesService extends BaseService<
  RoCustomizedQueuesDto,
  RoCustomizedQueuesDto,
  UpdateRoCustomizedQueuesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.ro_customized_queues);
  }
}
