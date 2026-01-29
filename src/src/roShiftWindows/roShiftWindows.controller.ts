import { RoShiftWindowsService } from './roShiftWindows.service';
import { RoShiftWindowsDto } from 'src/generated/nestjs-dto/roShiftWindows.dto';
import { UpdateRoShiftWindowsDto } from 'src/generated/nestjs-dto/update-roShiftWindows.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('ro-shift-windows')
export class RoShiftWindowsController extends BaseController<
  RoShiftWindowsDto,
  UpdateRoShiftWindowsDto
> {
  constructor(private readonly roShiftWindowsService: RoShiftWindowsService) {
    super(roShiftWindowsService);
  }
}
