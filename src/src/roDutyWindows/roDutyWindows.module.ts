import { Module } from '@nestjs/common';
import { RoDutyWindowsService } from './roDutyWindows.service';
import { RoDutyWindowsController } from './roDutyWindows.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoDutyWindowsController],
  providers: [RoDutyWindowsService],
})
export class RoDutyWindowsModule {}
