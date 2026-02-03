import { RoCustomizedQueuesService } from './roCustomizedQueues.service';
import { RoCustomizedQueuesDto } from 'src/generated/nestjs-dto/roCustomizedQueues.dto';
import { UpdateRoCustomizedQueuesDto } from 'src/generated/nestjs-dto/update-roCustomizedQueues.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('ro-customized-queues')
export class RoCustomizedQueuesController extends BaseController(
  RoCustomizedQueuesDto,
  UpdateRoCustomizedQueuesDto,
) {
  constructor(
    private readonly roCustomizedQueuesService: RoCustomizedQueuesService,
  ) {
    super(roCustomizedQueuesService);
  }
}
