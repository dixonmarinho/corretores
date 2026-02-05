import { RoDutiesService } from './roDuties.service';
import { RoDutiesDto } from 'src/generated/nestjs-dto/roDuties.dto';
import { UpdateRoDutiesDto } from 'src/generated/nestjs-dto/update-roDuties.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('RoDuties')
@Controller('ro-duties')
export class RoDutiesController extends BaseController(
  RoDutiesDto,
  UpdateRoDutiesDto,
) {
  constructor(private readonly roDutiesService: RoDutiesService) {
    super(roDutiesService);
  }
}
