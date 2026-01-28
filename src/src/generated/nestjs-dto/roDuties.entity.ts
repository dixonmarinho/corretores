import { ApiProperty } from '@nestjs/swagger';
import { RoDailyDuties } from './roDailyDuties.entity';
import { Agencies } from './agencies.entity';
import { RoShiftTypes } from './roShiftTypes.entity';
import { RoShiftWindows } from './roShiftWindows.entity';
import { Strategies } from './strategies.entity';

export class RoDuties {
  id: string;
  agency_id: string;
  code: string;
  is_active: boolean | null;
  is_default: boolean | null;
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
  agencies?: Agencies;
  ro_shift_types?: RoShiftTypes[];
  ro_shift_windows?: RoShiftWindows[];
  strategies?: Strategies[];
}
