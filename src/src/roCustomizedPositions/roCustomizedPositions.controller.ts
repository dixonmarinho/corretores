import { RoCustomizedPositionsService } from './roCustomizedPositions.service';
import { RoCustomizedPositionsDto } from 'src/generated/nestjs-dto/roCustomizedPositions.dto';
import { UpdateRoCustomizedPositionsDto } from 'src/generated/nestjs-dto/update-roCustomizedPositions.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('ro-customized-positions')
export class RoCustomizedPositionsController extends BaseController(
  RoCustomizedPositionsDto,
  UpdateRoCustomizedPositionsDto,
) {
  constructor(
    private readonly roCustomizedPositionsService: RoCustomizedPositionsService,
  ) {
    super(roCustomizedPositionsService);
  }
}
