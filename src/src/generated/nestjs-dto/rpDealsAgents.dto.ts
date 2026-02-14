import { ApiProperty } from '@nestjs/swagger';

export class RpDealsAgentsDto {
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
}
