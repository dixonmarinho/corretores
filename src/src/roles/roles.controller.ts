import { RolesService } from './roles.service';
import { RolesDto } from 'src/generated/nestjs-dto/roles.dto';
import { UpdateRolesDto } from 'src/generated/nestjs-dto/update-roles.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';

@Controller('roles')
export class RolesController extends BaseController(RolesDto, UpdateRolesDto) {
  constructor(private readonly rolesService: RolesService) {
    super(rolesService);
  }
}
