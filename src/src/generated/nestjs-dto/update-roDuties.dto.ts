import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoDutiesDto {
  code?: string;
  @ApiProperty({
    default: true,
  })
  is_active?: boolean;
  @ApiProperty({
    default: false,
  })
  is_default?: boolean;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
