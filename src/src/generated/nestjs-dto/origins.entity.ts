
import {ApiProperty} from '@nestjs/swagger'
import {Agencies} from './agencies.entity'
import {RoCustomizedQueues} from './roCustomizedQueues.entity'
import {RpDeals} from './rpDeals.entity'


export class Origins {
  id: string ;
agency_id: string ;
code: string ;
description: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
created_at: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at: Date  | null;
agencies?: Agencies ;
ro_customized_queues?: RoCustomizedQueues[] ;
rp_deals?: RpDeals[] ;
}
