import { Module } from '@nestjs/common';
import { RoShiftTypesService } from './roShiftTypes.service';
import { RoShiftTypesController } from './roShiftTypes.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RoShiftTypesController],
  providers: [RoShiftTypesService],
})
export class RoShiftTypesModule {}
