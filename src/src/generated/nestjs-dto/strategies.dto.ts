
import {ApiProperty} from '@nestjs/swagger'


export class StrategiesDto {
  id: string ;
code: string ;
strategy_type: string ;
name: string ;
description: string  | null;
is_singleton: boolean ;
fallback_enabled: boolean  | null;
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
