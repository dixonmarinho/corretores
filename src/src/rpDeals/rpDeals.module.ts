import { Module } from '@nestjs/common';
import { RpDealsService } from './rpDeals.service';
import { RpDealsController } from './rpDeals.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpDealsController],
  providers: [RpDealsService],
})
export class RpDealsModule {}
