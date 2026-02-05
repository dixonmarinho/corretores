import { RpDealsExecutionsService } from './rpDealsExecutions.service';
import { RpDealsExecutionsDto } from 'src/generated/nestjs-dto/rpDealsExecutions.dto';
import { UpdateRpDealsExecutionsDto } from 'src/generated/nestjs-dto/update-rpDealsExecutions.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('RpDealsExecutions')
@Controller('rp-deals-executions')
export class RpDealsExecutionsController extends BaseController(
  RpDealsExecutionsDto,
  UpdateRpDealsExecutionsDto,
) {
  constructor(
    private readonly rpDealsExecutionsService: RpDealsExecutionsService,
  ) {
    super(rpDealsExecutionsService);
  }
}
