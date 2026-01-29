
import {ApiProperty} from '@nestjs/swagger'


export class RoDutyPositionsDto {
  id: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
position_order: number ;
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
