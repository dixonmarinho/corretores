import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoCustomizedQueuesDto {
  code?: string;
  @ApiProperty({
    default: `CAMPAIGN_META`,
  })
  source?: string;
  description?: string;
  external_campaign_name?: string;
  @ApiProperty({
    default: true,
  })
  is_active?: boolean;
}
