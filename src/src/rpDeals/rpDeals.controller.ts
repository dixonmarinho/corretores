import { RpDealsService } from './rpDeals.service';
import { RpDealsDto } from 'src/generated/nestjs-dto/rpDeals.dto';
import { UpdateRpDealsDto } from 'src/generated/nestjs-dto/update-rpDeals.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('rp-deals')
export class RpDealsController extends BaseController<
  RpDealsDto,
  UpdateRpDealsDto
> {
  constructor(private readonly rpDealsService: RpDealsService) {
    super(rpDealsService);
  }
}
