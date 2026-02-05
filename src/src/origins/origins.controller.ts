import { OriginsService } from './origins.service';
import { OriginsDto } from 'src/generated/nestjs-dto/origins.dto';
import { UpdateOriginsDto } from 'src/generated/nestjs-dto/update-origins.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Origins')
@Controller('origins')
export class OriginsController extends BaseController(
  OriginsDto,
  UpdateOriginsDto,
) {
  constructor(private readonly originsService: OriginsService) {
    super(originsService);
  }
}
