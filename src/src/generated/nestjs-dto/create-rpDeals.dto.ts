import { ApiProperty } from '@nestjs/swagger';

export class CreateRpDealsDto {
  @ApiProperty({
    default: `BUY`,
  })
  interest?: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_card_id: number;
  @ApiProperty({
    default: `NEW`,
  })
  crm_card_status?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  invalidated_at?: Date;
  invalidation_reason?: string;
  @ApiProperty({
    default: `IN_QUEUE`,
  })
  deal_status?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
