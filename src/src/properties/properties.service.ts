import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base.service';
import { PropertiesDto } from 'src/generated/nestjs-dto/properties.dto';
import { UpdatePropertiesDto } from 'src/generated/nestjs-dto/update-properties.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PropertiesService extends BaseService<
  PropertiesDto,
  PropertiesDto,
  UpdatePropertiesDto
> {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma, prisma.properties);
  }
}
