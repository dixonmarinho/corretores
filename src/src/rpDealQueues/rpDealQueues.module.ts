import { Module } from '@nestjs/common';
import { RpDealQueuesService } from './rpDealQueues.service';
import { RpDealQueuesController } from './rpDealQueues.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpDealQueuesController],
  providers: [RpDealQueuesService],
})
export class RpDealQueuesModule {}
