
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class RpDealQueuesDto {
  id: string ;
queue_type: string ;
metadata: Prisma.JsonValue  | null;
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
}
