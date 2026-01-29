import { ApiProperty } from '@nestjs/swagger';

export class RoDutyWindowsDto {
  id: string;
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
