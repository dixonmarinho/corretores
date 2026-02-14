import { ApiProperty } from '@nestjs/swagger';
import { Agencies } from './agencies.entity';
import { Roles } from './roles.entity';
import { RoCustomizedPositions } from './roCustomizedPositions.entity';
import { RoDutyPositions } from './roDutyPositions.entity';
import { RpAttempts } from './rpAttempts.entity';
import { RpDealQueues } from './rpDealQueues.entity';
import { RpDeals } from './rpDeals.entity';
import { RpDealsAgents } from './rpDealsAgents.entity';

export class Profiles {
  id: string;
  agency_id: string;
  role_id: string;
  full_name: string | null;
  name: string;
  avatar_url: string | null;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_code: number;
  agencies?: Agencies;
  roles?: Roles;
  ro_customized_positions?: RoCustomizedPositions[];
  ro_duty_positions?: RoDutyPositions[];
  rp_attempts?: RpAttempts[];
  rp_deal_queues?: RpDealQueues[];
  rp_deals_rp_deals_crm_card_outdated_by_agentToprofiles?: RpDeals[];
  rp_deals_rp_deals_invalidated_byToprofiles?: RpDeals[];
  rp_deals_agents?: RpDealsAgents[];
}
