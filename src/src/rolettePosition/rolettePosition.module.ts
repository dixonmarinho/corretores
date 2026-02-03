import { Module } from '@nestjs/common';
import { RolettePositionController } from './rolettePosition.controller';
import { RolettePositionService } from './rolettePosition.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [RolettePositionController],
  providers: [RolettePositionService, PrismaService],
})
export class RolettePositionModule {}
