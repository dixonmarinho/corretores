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
  profiles?: Profiles;
  ro_duty_windows?: RoDutyWindows;
}
