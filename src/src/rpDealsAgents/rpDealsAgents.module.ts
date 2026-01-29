import { Module } from '@nestjs/common';
import { RpDealsAgentsService } from './rpDealsAgents.service';
import { RpDealsAgentsController } from './rpDealsAgents.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpDealsAgentsController],
  providers: [RpDealsAgentsService],
})
export class RpDealsAgentsModule {}
