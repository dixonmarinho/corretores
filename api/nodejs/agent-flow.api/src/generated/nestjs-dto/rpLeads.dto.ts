import { ApiProperty } from '@nestjs/swagger';

export class RpLeadsDto {
  id: string;
  crm_lead_id: string;
  name: string;
  phone: string | null;
  email: string | null;
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
}
