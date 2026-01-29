
import {ApiProperty} from '@nestjs/swagger'


export class RoShiftWindowsDto {
  id: string ;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
window_seq: number ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
time_start: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
time_end: Date ;
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
