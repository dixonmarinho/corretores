import { RoDailyDuties } from './roDailyDuties.entity';
import { RoDuties } from './roDuties.entity';
import { RoShiftWindows } from './roShiftWindows.entity';

export class RoShiftTypes {
  id: string;
  duty_id: string;
  code: string;
  description: string | null;
  ro_daily_duties?: RoDailyDuties[];
  ro_duties?: RoDuties;
  ro_shift_windows?: RoShiftWindows[];
}
