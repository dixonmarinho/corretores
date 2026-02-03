import { ProfileService } from './profile.service';
import { ProfilesDto } from 'src/generated/nestjs-dto/profiles.dto';
import { UpdateProfilesDto } from 'src/generated/nestjs-dto/update-profiles.dto';
import { BaseController } from 'src/common/base.controller';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('profile')
export class ProfileController extends BaseController(
  ProfilesDto,
  UpdateProfilesDto,
) {
  constructor(private readonly profileService: ProfileService) {
    super(profileService);
  }
}
