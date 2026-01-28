import { Injectable } from '@nestjs/common';
import { ProfilesDto } from 'src/generated/nestjs-dto/profiles.dto';
import { UpdateProfilesDto } from 'src/generated/nestjs-dto/update-profiles.dto';

@Injectable()
export class ProfileService {
  create(profile: ProfilesDto) {
    return 'This action adds a new profile';
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfilesDto) {
    return `This action updates a #${id} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
