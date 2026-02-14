import { ApiProperty } from '@nestjs/swagger';
import { RoDuties } from './roDuties.entity';
import { RoShiftTypes } from './roShiftTypes.entity';
import { RoDutyWindows } from './roDutyWindows.entity';

export class RoDailyDuties {
  id: string;
  duty_id: string;
  shift_type_id: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  roster_date: Date;
  ro_duties?: RoDuties;
  ro_shift_types?: RoShiftTypes;
  ro_duty_windows?: RoDutyWindows[];
}
