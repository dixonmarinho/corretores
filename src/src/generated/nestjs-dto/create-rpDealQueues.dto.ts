import { Prisma } from '@prisma/client';

export class CreateRpDealQueuesDto {
  queue_type: string;
  metadata?: Prisma.InputJsonValue;
}
