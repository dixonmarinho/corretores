import { RpDealQueues } from './rpDealQueues.entity';
import { RpDeals } from './rpDeals.entity';
import { Agencies } from './agencies.entity';

export class RpLeads {
  id: string;
  agency_id: string;
  crm_lead_id: string;
  name: string;
  phone: string | null;
  email: string | null;
  rp_deal_queues?: RpDealQueues[];
  rp_deals?: RpDeals[];
  agencies?: Agencies;
}
