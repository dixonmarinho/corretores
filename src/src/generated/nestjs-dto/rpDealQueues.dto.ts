import { Prisma } from '@prisma/client';

export class RpDealQueuesDto {
  queue_type: string;
  metadata: Prisma.JsonValue | null;
}
