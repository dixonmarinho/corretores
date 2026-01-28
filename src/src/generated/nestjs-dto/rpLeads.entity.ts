import { ApiProperty } from '@nestjs/swagger';
import { RpDealQueues } from './rpDealQueues.entity';
import { RpDeals } from './rpDeals.entity';
import { Agencies } from './agencies.entity';

export class RpLeads {
  id: string;
  agency_id: string;
  crm_lead_id: string;
  name: string;
  phone: string | null;
  email: string | null;
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
  rp_deal_queues?: RpDealQueues[];
  rp_deals?: RpDeals[];
  agencies?: Agencies;
}
