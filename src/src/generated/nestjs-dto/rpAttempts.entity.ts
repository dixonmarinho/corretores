import { ApiProperty } from '@nestjs/swagger';
import { RpDeals } from './rpDeals.entity';
import { Profiles } from './profiles.entity';
import { Strategies } from './strategies.entity';
import { RpDealsAgents } from './rpDealsAgents.entity';

export class RpAttempts {
  id: string;
  deal_id: string;
  profile_id: string;
  strategy_id: string;
  path_link: string;
  message_id: string | null;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  attempt_seq: number;
  attempt_type: string | null;
  observation_redirect: string | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  sent_at: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  clicked_at: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  expired_at: Date | null;
  status_link: string | null;
  rp_deals?: RpDeals;
  profiles?: Profiles;
  strategies?: Strategies;
  rp_deals_agents?: RpDealsAgents | null;
}
