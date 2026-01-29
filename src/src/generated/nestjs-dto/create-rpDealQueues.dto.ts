import { Prisma } from '@prisma/client';
import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateRpDealQueuesDto {
  queue_type: string;
  metadata?: Prisma.InputJsonValue;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
