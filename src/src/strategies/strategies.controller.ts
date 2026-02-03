import { StrategiesService } from './strategies.service';
import { StrategiesDto } from 'src/generated/nestjs-dto/strategies.dto';
import { UpdateStrategiesDto } from 'src/generated/nestjs-dto/update-strategies.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('strategies')
export class StrategiesController extends BaseController(
  StrategiesDto,
  UpdateStrategiesDto,
) {
  constructor(private readonly strategiesService: StrategiesService) {
    super(strategiesService);
  }
}
