import { NotificationsService } from './notifications.service';
import { NotificationsDto } from 'src/generated/nestjs-dto/notifications.dto';
import { UpdateNotificationsDto } from 'src/generated/nestjs-dto/update-notifications.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Notifications')
@Controller('notifications')
export class NotificationsController extends BaseController(
  NotificationsDto,
  UpdateNotificationsDto,
) {
  constructor(private readonly notificationsService: NotificationsService) {
    super(notificationsService);
  }
}
