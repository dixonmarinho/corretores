import { Agencies } from './agencies.entity';
import { RoCustomizedQueues } from './roCustomizedQueues.entity';
import { RpDeals } from './rpDeals.entity';

export class Origins {
  id: string;
  agency_id: string;
  code: string;
  description: string | null;
  agencies?: Agencies;
  ro_customized_queues?: RoCustomizedQueues[];
  rp_deals?: RpDeals[];
}
