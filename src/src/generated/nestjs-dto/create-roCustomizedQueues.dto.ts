
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRoCustomizedQueuesDto {
  code: string;
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
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
