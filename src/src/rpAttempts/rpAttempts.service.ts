import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { RpAttemptsDto } from 'src/generated/nestjs-dto/rpAttempts.dto';
import { UpdateRpAttemptsDto } from 'src/generated/nestjs-dto/update-rpAttempts.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class RpAttemptsService extends BaseService<
  RpAttemptsDto,
  RpAttemptsDto,
  UpdateRpAttemptsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.rp_attempts);
  }
}
