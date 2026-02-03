import { RpAttemptsService } from './rpAttempts.service';
import { RpAttemptsDto } from 'src/generated/nestjs-dto/rpAttempts.dto';
import { UpdateRpAttemptsDto } from 'src/generated/nestjs-dto/update-rpAttempts.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('rp-attempts')
export class RpAttemptsController extends BaseController(
  RpAttemptsDto,
  UpdateRpAttemptsDto,
) {
  constructor(private readonly rpAttemptsService: RpAttemptsService) {
    super(rpAttemptsService);
  }
}
