import { ApiProperty } from '@nestjs/swagger';
import { RpAttempts } from './rpAttempts.entity';
import { RpDeals } from './rpDeals.entity';
import { Profiles } from './profiles.entity';
import { Strategies } from './strategies.entity';

export class RpDealsAgents {
  id: string;
  deal_id: string;
  profile_id: string;
  accepted_attempt_id: string;
  assigned_strategy_id: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  assigned_seq: number;
  assigned_type: string | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  assigned_at: Date | null;
  is_active: boolean | null;
  rp_attempts?: RpAttempts;
  rp_deals?: RpDeals;
  profiles?: Profiles;
  strategies?: Strategies;
}
