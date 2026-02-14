import { RpDeals } from './rpDeals.entity';

export class RpDealsExecutions {
  id: string;
  deal_id: string;
  log: string | null;
  additional_info: string | null;
  rp_deals?: RpDeals;
}
