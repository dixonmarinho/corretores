
import {ApiProperty} from '@nestjs/swagger'


export class RoDailyDutiesDto {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
roster_date: Date ;
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
