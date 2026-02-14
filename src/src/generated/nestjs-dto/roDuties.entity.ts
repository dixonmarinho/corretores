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
  ro_daily_duties?: RoDailyDuties[];
  agencies?: Agencies;
  ro_shift_types?: RoShiftTypes[];
  ro_shift_windows?: RoShiftWindows[];
  strategies?: Strategies[];
}
