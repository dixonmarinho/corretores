import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgenciesService } from './agencies.service';
import { AgenciesDto } from 'src/generated/nestjs-dto/agencies.dto';
import { UpdateAgenciesDto } from 'src/generated/nestjs-dto/update-agencies.dto';
import { BaseController } from 'src/common/base.controller';

@ApiTags('Agencies')
@Controller('agencies')
export class AgenciesController extends BaseController(
  AgenciesDto,
  UpdateAgenciesDto,
) {
  constructor(public readonly service: AgenciesService) {
    super(service);
  }
}
