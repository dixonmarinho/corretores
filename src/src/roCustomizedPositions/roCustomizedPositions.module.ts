import { Module } from '@nestjs/common';
import { RoCustomizedPositionsService } from './roCustomizedPositions.service';
import { RoCustomizedPositionsController } from './roCustomizedPositions.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoCustomizedPositionsController],
  providers: [RoCustomizedPositionsService],
})
export class RoCustomizedPositionsModule {}
