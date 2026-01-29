
import {ApiProperty} from '@nestjs/swagger'


export class RpDealsDto {
  id: string ;
outside_hours: boolean ;
interest: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
crm_card_id: number ;
crm_card_status: string  | null;
has_manual_redirect: boolean ;
is_valid: boolean ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
invalidated_at: Date  | null;
invalidation_reason: string  | null;
deal_status: string  | null;
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
