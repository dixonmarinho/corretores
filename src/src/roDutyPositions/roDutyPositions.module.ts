import { Module } from '@nestjs/common';
import { RoDutyPositionsService } from './roDutyPositions.service';
import { RoDutyPositionsController } from './roDutyPositions.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoDutyPositionsController],
  providers: [RoDutyPositionsService],
})
export class RoDutyPositionsModule {}
