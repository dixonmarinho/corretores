import { AgencySettingsService } from './agencySettings.service';
import { AgencySettingsDto } from 'src/generated/nestjs-dto/agencySettings.dto';
import { UpdateAgencySettingsDto } from 'src/generated/nestjs-dto/update-agencySettings.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('AgencySettings')
@Controller('agency-settings')
export class AgencySettingsController extends BaseController(
  AgencySettingsDto,
  UpdateAgencySettingsDto,
) {
  constructor(private readonly agencySettingsService: AgencySettingsService) {
    super(agencySettingsService);
  }
}
