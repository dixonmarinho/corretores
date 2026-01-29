import { Module } from '@nestjs/common';
import { RoDutiesService } from './roDuties.service';
import { RoDutiesController } from './roDuties.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoDutiesController],
  providers: [RoDutiesService],
})
export class RoDutiesModule {}
