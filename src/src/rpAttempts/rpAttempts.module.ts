import { Module } from '@nestjs/common';
import { RpAttemptsService } from './rpAttempts.service';
import { RpAttemptsController } from './rpAttempts.controller';
import { PrismaModule } from '../prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RpAttemptsController],
  providers: [RpAttemptsService],
})
export class RpAttemptsModule {}
