import { Module } from '@nestjs/common';
import { OriginsService } from './origins.service';
import { OriginsController } from './origins.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OriginsController],
  providers: [OriginsService],
})
export class OriginsModule {}
