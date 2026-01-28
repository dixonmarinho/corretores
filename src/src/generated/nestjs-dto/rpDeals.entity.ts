import { ApiProperty } from '@nestjs/swagger';
import { RpAttempts } from './rpAttempts.entity';
import { RpDealQueues } from './rpDealQueues.entity';
import { Profiles } from './profiles.entity';
import { RpLeads } from './rpLeads.entity';
import { Origins } from './origins.entity';
import { Properties } from './properties.entity';
import { Strategies } from './strategies.entity';
import { RpDealsAgents } from './rpDealsAgents.entity';
import { RpDealsExecutions } from './rpDealsExecutions.entity';

export class RpDeals {
  id: string;
  lead_id: string;
  property_id: string;
  origin_id: string;
  strategy_id: string;
  crm_card_outdated_by_agent: string | null;
  invalidated_by: string | null;
  outside_hours: boolean;
  interest: string | null;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_card_id: number;
  crm_card_status: string | null;
  has_manual_redirect: boolean;
  is_valid: boolean;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  invalidated_at: Date | null;
  invalidation_reason: string | null;
  deal_status: string | null;
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
  rp_attempts?: RpAttempts[];
  rp_deal_queues_rp_deal_queues_deal_idTorp_deals?: RpDealQueues | null;
  rp_deal_queues_rp_deal_queues_parent_deal_idTorp_deals?: RpDealQueues[];
  profiles_rp_deals_crm_card_outdated_by_agentToprofiles?: Profiles | null;
  profiles_rp_deals_invalidated_byToprofiles?: Profiles | null;
  rp_leads?: RpLeads;
  origins?: Origins;
  properties?: Properties;
  strategies?: Strategies;
  rp_deals_agents?: RpDealsAgents | null;
  rp_deals_executions?: RpDealsExecutions | null;
}
