import { Module } from '@nestjs/common';
import { RoCustomizedQueuesService } from './roCustomizedQueues.service';
import { RoCustomizedQueuesController } from './roCustomizedQueues.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoCustomizedQueuesController],
  providers: [RoCustomizedQueuesService],
})
export class RoCustomizedQueuesModule {}
