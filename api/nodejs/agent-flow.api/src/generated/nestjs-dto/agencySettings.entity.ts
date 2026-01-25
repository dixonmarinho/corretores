import { ApiProperty } from '@nestjs/swagger';
import { Agencies } from './agencies.entity';

export class AgencySettings {
  id: string;
  agency_id: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at: Date | null;
  agencies?: Agencies;
}
