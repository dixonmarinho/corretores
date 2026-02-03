import { RoDutyPositionsService } from './roDutyPositions.service';
import { RoDutyPositionsDto } from 'src/generated/nestjs-dto/roDutyPositions.dto';
import { UpdateRoDutyPositionsDto } from 'src/generated/nestjs-dto/update-roDutyPositions.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('ro-duty-positions')
export class RoDutyPositionsController extends BaseController(
  RoDutyPositionsDto,
  UpdateRoDutyPositionsDto,
) {
  constructor(private readonly roDutyPositionsService: RoDutyPositionsService) {
    super(roDutyPositionsService);
  }
}
