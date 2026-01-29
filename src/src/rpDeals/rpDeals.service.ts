import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RpDealsDto } from 'src/generated/nestjs-dto/rpDeals.dto';
import { UpdateRpDealsDto } from 'src/generated/nestjs-dto/update-rpDeals.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RpDealsService extends BaseService<
  RpDealsDto,
  RpDealsDto,
  UpdateRpDealsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.rp_deals);
  }
}
