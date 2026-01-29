import { Module } from '@nestjs/common';
import { RpLeadsService } from './rpLeads.service';
import { RpLeadsController } from './rpLeads.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpLeadsController],
  providers: [RpLeadsService],
})
export class RpLeadsModule {}
