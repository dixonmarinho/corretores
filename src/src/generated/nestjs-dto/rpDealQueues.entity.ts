import { Prisma } from '@prisma/client';
import { RpDeals } from './rpDeals.entity';
import { RpLeads } from './rpLeads.entity';
import { Profiles } from './profiles.entity';

export class RpDealQueues {
  id: string;
  deal_id: string;
  lead_id: string;
  reserved_profile_id: string | null;
  parent_deal_id: string | null;
  queue_type: string;
  metadata: Prisma.JsonValue | null;
  rp_deals_rp_deal_queues_deal_idTorp_deals?: RpDeals;
  rp_leads?: RpLeads;
  rp_deals_rp_deal_queues_parent_deal_idTorp_deals?: RpDeals | null;
  profiles?: Profiles | null;
}
