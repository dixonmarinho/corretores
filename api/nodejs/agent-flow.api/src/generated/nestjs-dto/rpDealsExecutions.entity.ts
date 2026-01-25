import { ApiProperty } from '@nestjs/swagger';
import { RpDeals } from './rpDeals.entity';

export class RpDealsExecutions {
  id: string;
  deal_id: string;
  log: string | null;
  additional_info: string | null;
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
  rp_deals?: RpDeals;
}
