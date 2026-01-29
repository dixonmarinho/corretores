import { Module } from '@nestjs/common';
import { RoDailyDutiesService } from './roDailyDuties.service';
import { RoDailyDutiesController } from './roDailyDuties.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoDailyDutiesController],
  providers: [RoDailyDutiesService],
})
export class RoDailyDutiesModule {}
