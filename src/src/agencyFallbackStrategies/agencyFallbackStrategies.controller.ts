import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgencyFallbackStrategiesService } from './agencyFallbackStrategies.service';
import { AgencyFallbackStrategiesDto } from 'src/generated/nestjs-dto/agencyFallbackStrategies.dto';
import { UpdateAgencyFallbackStrategiesDto } from 'src/generated/nestjs-dto/update-agencyFallbackStrategies.dto';
import { BaseController } from 'src/common/base.controller';

@ApiTags('agency-fallback-strategies')
@Controller('agency-fallback-strategies')
export class AgencyFallbackStrategiesController extends BaseController<AgencyFallbackStrategiesDto, UpdateAgencyFallbackStrategiesDto> {
  constructor(protected readonly service: AgencyFallbackStrategiesService) {
    super(service);
  }
}
