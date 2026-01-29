import { RpDealsAgentsService } from './rpDealsAgents.service';
import { RpDealsAgentsDto } from 'src/generated/nestjs-dto/rpDealsAgents.dto';
import { UpdateRpDealsAgentsDto } from 'src/generated/nestjs-dto/update-rpDealsAgents.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('rp-deals-agents')
export class RpDealsAgentsController extends BaseController<
  RpDealsAgentsDto,
  UpdateRpDealsAgentsDto
> {
  constructor(private readonly rpDealsAgentsService: RpDealsAgentsService) {
    super(rpDealsAgentsService);
  }
}
