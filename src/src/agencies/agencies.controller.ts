import { Controller } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { AgenciesDto } from 'src/generated/nestjs-dto/agencies.dto';
import { UpdateAgenciesDto } from 'src/generated/nestjs-dto/update-agencies.dto';
import { BaseController } from 'src/common/base.controller';
import { ApiTags } from '@nestjs/swagger';

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
