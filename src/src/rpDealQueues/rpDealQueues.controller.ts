import { RpDealQueuesService } from './rpDealQueues.service';
import { RpDealQueuesDto } from 'src/generated/nestjs-dto/rpDealQueues.dto';
import { UpdateRpDealQueuesDto } from 'src/generated/nestjs-dto/update-rpDealQueues.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('RpDealQueues')
@Controller('rp-deal-queues')
export class RpDealQueuesController extends BaseController(
  RpDealQueuesDto,
  UpdateRpDealQueuesDto,
) {
  constructor(private readonly rpDealQueuesService: RpDealQueuesService) {
    super(rpDealQueuesService);
  }
}
