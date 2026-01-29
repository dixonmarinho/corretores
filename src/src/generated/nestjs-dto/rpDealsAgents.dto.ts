import { ApiProperty } from '@nestjs/swagger';

export class RpDealsAgentsDto {
  id: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  assigned_seq: number;
  assigned_type: string | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  assigned_at: Date | null;
  is_active: boolean | null;
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
