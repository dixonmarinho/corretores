import { RoShiftTypesService } from './roShiftTypes.service';
import { RoShiftTypesDto } from 'src/generated/nestjs-dto/roShiftTypes.dto';
import { UpdateRoShiftTypesDto } from 'src/generated/nestjs-dto/update-roShiftTypes.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('RoShiftTypes')
@Controller('ro-shift-types')
export class RoShiftTypesController extends BaseController(
  RoShiftTypesDto,
  UpdateRoShiftTypesDto,
) {
  constructor(private readonly roShiftTypesService: RoShiftTypesService) {
    super(roShiftTypesService);
  }
}
