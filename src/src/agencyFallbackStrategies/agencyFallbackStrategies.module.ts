import { Module } from '@nestjs/common';
import { AgencyFallbackStrategiesService } from './agencyFallbackStrategies.service';
import { AgencyFallbackStrategiesController } from './agencyFallbackStrategies.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AgencyFallbackStrategiesService],
  controllers: [AgencyFallbackStrategiesController],
})
export class AgencyFallbackStrategiesModule {}
