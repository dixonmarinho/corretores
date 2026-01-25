import { ApiProperty } from '@nestjs/swagger';
import { RoDutyPositions } from './roDutyPositions.entity';
import { RoDailyDuties } from './roDailyDuties.entity';
import { RoShiftWindows } from './roShiftWindows.entity';

export class RoDutyWindows {
  id: string;
  daily_duty_id: string;
  shift_window_id: string;
  is_active: boolean | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at: Date | null;
  ro_duty_positions?: RoDutyPositions[];
  ro_daily_duties?: RoDailyDuties;
  ro_shift_windows?: RoShiftWindows;
}
