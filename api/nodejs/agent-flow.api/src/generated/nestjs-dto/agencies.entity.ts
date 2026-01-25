import { ApiProperty } from '@nestjs/swagger';
import { AgencySettings } from './agencySettings.entity';
import { Notifications } from './notifications.entity';
import { Origins } from './origins.entity';
import { Profiles } from './profiles.entity';
import { Properties } from './properties.entity';
import { RoCustomizedQueues } from './roCustomizedQueues.entity';
import { RoDuties } from './roDuties.entity';
import { RpLeads } from './rpLeads.entity';
import { Strategies } from './strategies.entity';

export class Agencies {
  id: string;
  name: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_agency_id: number;
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
  agency_settings?: AgencySettings[];
  notifications?: Notifications[];
  origins?: Origins[];
  profiles?: Profiles[];
  properties?: Properties[];
  ro_customized_queues?: RoCustomizedQueues[];
  ro_duties?: RoDuties[];
  rp_leads?: RpLeads[];
  strategies?: Strategies[];
}
