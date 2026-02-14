import { Prisma } from '@prisma/client';

export class UpdateRpDealQueuesDto {
  queue_type?: string;
  metadata?: Prisma.InputJsonValue;
}
