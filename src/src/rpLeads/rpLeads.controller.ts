import { RpLeadsService } from './rpLeads.service';
import { RpLeadsDto } from 'src/generated/nestjs-dto/rpLeads.dto';
import { UpdateRpLeadsDto } from 'src/generated/nestjs-dto/update-rpLeads.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('rp-leads')
export class RpLeadsController extends BaseController(
  RpLeadsDto,
  UpdateRpLeadsDto,
) {
  constructor(private readonly rpLeadsService: RpLeadsService) {
    super(rpLeadsService);
  }
}
