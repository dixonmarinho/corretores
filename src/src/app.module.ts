import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './profile/profile.module';
import { AgenciesModule } from './agencies/agencies.module';
import { StrategiesModule } from './strategies/strategies.module';
import { RpLeadsModule } from './rpLeads/rpLeads.module';
import { RpDealsExecutionsModule } from './rpDealsExecutions/rpDealsExecutions.module';
import { RpDealsAgentsModule } from './rpDealsAgents/rpDealsAgents.module';
import { RpDealsModule } from './rpDeals/rpDeals.module';
import { RpDealQueuesModule } from './rpDealQueues/rpDealQueues.module';
import { RpAttemptsModule } from './rpAttempts/rpAttempts.module';
import { RoShiftWindowsModule } from './roShiftWindows/roShiftWindows.module';
import { RoShiftTypesModule } from './roShiftTypes/roShiftTypes.module';
import { RoDutyWindowsModule } from './roDutyWindows/roDutyWindows.module';
import { RoDutyPositionsModule } from './roDutyPositions/roDutyPositions.module';
import { RoDutiesModule } from './roDuties/roDuties.module';
import { RoDailyDutiesModule } from './roDailyDuties/roDailyDuties.module';
import { AgencySettingsModule } from './agencySettings/agencySettings.module';
import { NotificationsModule } from './notifications/notifications.module';
import { OriginsModule } from './origins/origins.module';
import { PropertiesModule } from './properties/properties.module';
import { RolesModule } from './roles/roles.module';
import { RoCustomizedPositionsModule } from './roCustomizedPositions/roCustomizedPositions.module';
import { RoCustomizedQueuesModule } from './roCustomizedQueues/roCustomizedQueues.module';
import { AgencyFallbackStrategiesModule } from './agencyFallbackStrategies/agencyFallbackStrategies.module';

@Module({
  imports: [
    ProfileModule,
    AgenciesModule,
    StrategiesModule,
    AgencyFallbackStrategiesModule,
    AgencySettingsModule,
    NotificationsModule,
    OriginsModule,
    PropertiesModule,
    RolesModule,
    RoCustomizedPositionsModule,
    RoCustomizedQueuesModule,
    RoDailyDutiesModule,
    RoDutiesModule,
    RoDutyPositionsModule,
    RoDutyWindowsModule,
    RoShiftTypesModule,
    RoShiftWindowsModule,
    RpAttemptsModule,
    RpDealQueuesModule,
    RpDealsModule,
    RpDealsAgentsModule,
    RpDealsExecutionsModule,
    RpLeadsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
