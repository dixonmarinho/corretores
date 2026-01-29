import { Module } from '@nestjs/common';
import { AgenciesService } from './agencies.service';
import { AgenciesController } from './agencies.controller';
import { PrismaModule } from 'src/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AgenciesService],
  controllers: [AgenciesController],
})
export class AgenciesModule {}
