import { RoDutyWindowsService } from './roDutyWindows.service';
import { RoDutyWindowsDto } from 'src/generated/nestjs-dto/roDutyWindows.dto';
import { UpdateRoDutyWindowsDto } from 'src/generated/nestjs-dto/update-roDutyWindows.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('RoDutyWindows')
@Controller('ro-duty-windows')
export class RoDutyWindowsController extends BaseController(
  RoDutyWindowsDto,
  UpdateRoDutyWindowsDto,
) {
  constructor(private readonly roDutyWindowsService: RoDutyWindowsService) {
    super(roDutyWindowsService);
  }
}
