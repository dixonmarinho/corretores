import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgencyFallbackStrategiesService } from './agencyFallbackStrategies.service';
import { AgencyFallbackStrategiesDto } from 'src/generated/nestjs-dto/agencyFallbackStrategies.dto';
import { UpdateAgencyFallbackStrategiesDto } from 'src/generated/nestjs-dto/update-agencyFallbackStrategies.dto';
import { BaseController } from 'src/common/base.controller';

@ApiTags('AgencyFallbackStrategies')
@Controller('agency-fallback-strategies')
export class AgencyFallbackStrategiesController extends BaseController(
  AgencyFallbackStrategiesDto,
  UpdateAgencyFallbackStrategiesDto,
) {
  constructor(public readonly service: AgencyFallbackStrategiesService) {
    super(service);
  }
}
