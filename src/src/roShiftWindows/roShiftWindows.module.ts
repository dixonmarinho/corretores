import { Module } from '@nestjs/common';
import { RoShiftWindowsService } from './roShiftWindows.service';
import { RoShiftWindowsController } from './roShiftWindows.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoShiftWindowsController],
  providers: [RoShiftWindowsService],
})
export class RoShiftWindowsModule {}
