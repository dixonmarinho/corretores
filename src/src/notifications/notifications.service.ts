import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { NotificationsDto } from 'src/generated/nestjs-dto/notifications.dto';
import { UpdateNotificationsDto } from 'src/generated/nestjs-dto/update-notifications.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class NotificationsService extends BaseService<
  NotificationsDto,
  NotificationsDto,
  UpdateNotificationsDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.notifications);
  }
}
