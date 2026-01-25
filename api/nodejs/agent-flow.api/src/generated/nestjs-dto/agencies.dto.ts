import { ApiProperty } from '@nestjs/swagger';

export class AgenciesDto {
  id: string;
  name: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_agency_id: number;
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
