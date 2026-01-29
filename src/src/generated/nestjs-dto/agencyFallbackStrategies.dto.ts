
import {ApiProperty} from '@nestjs/swagger'


export class AgencyFallbackStrategiesDto {
  id: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
fallback_order: number ;
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
