import { ApiProperty } from '@nestjs/swagger';
import { Profiles } from './profiles.entity';
import { RoDutyWindows } from './roDutyWindows.entity';

export class RoDutyPositions {
  id: string;
  duty_window_id: string;
  profile_id: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order: number;
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
  profiles?: Profiles;
  ro_duty_windows?: RoDutyWindows;
}
