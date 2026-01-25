import { ApiProperty } from '@nestjs/swagger';
import { RoDailyDuties } from './roDailyDuties.entity';
import { RoDuties } from './roDuties.entity';
import { RoShiftWindows } from './roShiftWindows.entity';

export class RoShiftTypes {
  id: string;
  duty_id: string;
  code: string;
  description: string | null;
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
  ro_daily_duties?: RoDailyDuties[];
  ro_duties?: RoDuties;
  ro_shift_windows?: RoShiftWindows[];
}
