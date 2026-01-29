import { Module } from '@nestjs/common';
import { AgencySettingsService } from './agencySettings.service';
import { AgencySettingsController } from './agencySettings.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AgencySettingsController],
  providers: [AgencySettingsService],
})
export class AgencySettingsModule {}
