import { Prisma } from '@prisma/client';

export class RpDealQueuesDto {
  id: string;
  queue_type: string;
  metadata: Prisma.JsonValue | null;
}
