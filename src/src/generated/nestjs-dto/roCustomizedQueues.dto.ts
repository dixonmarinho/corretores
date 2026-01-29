
import {ApiProperty} from '@nestjs/swagger'


export class RoCustomizedQueuesDto {
  id: string ;
code: string ;
source: string  | null;
description: string  | null;
external_campaign_name: string  | null;
is_active: boolean  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
created_at: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at: Date  | null;
}
