
import {ApiProperty} from '@nestjs/swagger'


export class ProfilesDto {
  id: string ;
full_name: string  | null;
name: string ;
avatar_url: string  | null;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
crm_code: number ;
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
