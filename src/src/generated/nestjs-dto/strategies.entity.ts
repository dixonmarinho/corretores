import { ApiProperty } from '@nestjs/swagger';
import { AgencyFallbackStrategies } from './agencyFallbackStrategies.entity';
import { RpAttempts } from './rpAttempts.entity';
import { RpDeals } from './rpDeals.entity';
import { RpDealsAgents } from './rpDealsAgents.entity';
import { Agencies } from './agencies.entity';
import { RoDuties } from './roDuties.entity';
import { RoCustomizedQueues } from './roCustomizedQueues.entity';

export class Strategies {
  id: string;
  agency_id: string;
  duty_id: string | null;
  customized_queue_id: string | null;
  code: string;
  strategy_type: string;
  name: string;
  description: string | null;
  is_singleton: boolean;
  fallback_enabled: boolean | null;
  is_active: boolean | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at: Date | null;
  agency_fallback_strategies?: AgencyFallbackStrategies[];
  rp_attempts?: RpAttempts[];
  rp_deals?: RpDeals[];
  rp_deals_agents?: RpDealsAgents[];
  agencies?: Agencies;
  ro_duties?: RoDuties | null;
  ro_customized_queues?: RoCustomizedQueues | null;
}
