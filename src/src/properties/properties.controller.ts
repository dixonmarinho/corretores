import { PropertiesService } from './properties.service';
import { PropertiesDto } from 'src/generated/nestjs-dto/properties.dto';
import { UpdatePropertiesDto } from 'src/generated/nestjs-dto/update-properties.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('properties')
export class PropertiesController extends BaseController(
  PropertiesDto,
  UpdatePropertiesDto,
) {
  constructor(private readonly propertiesService: PropertiesService) {
    super(propertiesService);
  }
}
