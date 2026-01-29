import { Module } from '@nestjs/common';
import { RpDealsExecutionsService } from './rpDealsExecutions.service';
import { RpDealsExecutionsController } from './rpDealsExecutions.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpDealsExecutionsController],
  providers: [RpDealsExecutionsService],
})
export class RpDealsExecutionsModule {}
