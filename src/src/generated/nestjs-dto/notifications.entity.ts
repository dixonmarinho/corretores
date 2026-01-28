import { ApiProperty } from '@nestjs/swagger';
import { Agencies } from './agencies.entity';

export class Notifications {
  id: string;
  agency_id: string;
  type: string;
  title: string;
  message: string;
  severity: string;
  is_read: boolean;
  related_entity_type: string | null;
  related_entity_id: string | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  read_at: Date | null;
  agencies?: Agencies;
}
