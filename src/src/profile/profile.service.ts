import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { ProfilesDto } from 'src/generated/nestjs-dto/profiles.dto';
import { UpdateProfilesDto } from 'src/generated/nestjs-dto/update-profiles.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ProfileService extends BaseService<
  ProfilesDto,
  ProfilesDto,
  UpdateProfilesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.profiles);
  }
}
