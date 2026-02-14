import { RoCustomizedPositions } from './roCustomizedPositions.entity';
import { Agencies } from './agencies.entity';
import { Origins } from './origins.entity';
import { Properties } from './properties.entity';
import { Strategies } from './strategies.entity';

export class RoCustomizedQueues {
  id: string;
  agency_id: string;
  property_id: string | null;
  origin_id: string | null;
  code: string;
  source: string | null;
  description: string | null;
  external_campaign_name: string | null;
  is_active: boolean | null;
  ro_customized_positions?: RoCustomizedPositions[];
  agencies?: Agencies;
  origins?: Origins | null;
  properties?: Properties | null;
  strategies?: Strategies[];
}
