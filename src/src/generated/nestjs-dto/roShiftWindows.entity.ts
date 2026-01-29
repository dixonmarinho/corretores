
import {ApiProperty} from '@nestjs/swagger'
import {RoDutyWindows} from './roDutyWindows.entity'
import {RoDuties} from './roDuties.entity'
import {RoShiftTypes} from './roShiftTypes.entity'


export class RoShiftWindows {
  id: string ;
duty_id: string ;
shift_type_id: string ;
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
ro_duty_windows?: RoDutyWindows[] ;
ro_duties?: RoDuties ;
ro_shift_types?: RoShiftTypes ;
}
