import { ApiProperty } from '@nestjs/swagger';

export class RoDutiesDto {
  id: string;
  code: string;
  is_active: boolean | null;
  is_default: boolean | null;
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
