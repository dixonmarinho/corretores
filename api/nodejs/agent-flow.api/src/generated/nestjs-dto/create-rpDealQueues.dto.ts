import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from 'generated/prisma/client';

export class CreateRpDealQueuesDto {
  queue_type: string;
  metadata?: Prisma.InputJsonValue;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
