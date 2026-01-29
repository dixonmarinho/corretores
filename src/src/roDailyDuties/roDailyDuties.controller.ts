import { RoDailyDutiesService } from './roDailyDuties.service';
import { RoDailyDutiesDto } from 'src/generated/nestjs-dto/roDailyDuties.dto';
import { UpdateRoDailyDutiesDto } from 'src/generated/nestjs-dto/update-roDailyDuties.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('ro-daily-duties')
export class RoDailyDutiesController extends BaseController<
  RoDailyDutiesDto,
  UpdateRoDailyDutiesDto
> {
  constructor(private readonly roDailyDutiesService: RoDailyDutiesService) {
    super(roDailyDutiesService);
  }
}
