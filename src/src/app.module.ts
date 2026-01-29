import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { AgencyFallbackStrategiesModule } from './agencyFallbackStrategies/agencyFallbackStrategies.module';

@Module({
  imports: [ProfileModule, AgencyFallbackStrategiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
