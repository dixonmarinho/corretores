
import {ApiProperty} from '@nestjs/swagger'


export class RpDealsExecutionsDto {
  id: string ;
log: string  | null;
additional_info: string  | null;
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
