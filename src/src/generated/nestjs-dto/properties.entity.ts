import { Agencies } from './agencies.entity';
import { RoCustomizedQueues } from './roCustomizedQueues.entity';
import { RpDeals } from './rpDeals.entity';

export class Properties {
  id: string;
  agency_id: string;
  code: string;
  agencies?: Agencies;
  ro_customized_queues?: RoCustomizedQueues[];
  rp_deals?: RpDeals[];
}
