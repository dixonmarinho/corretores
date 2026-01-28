import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoDailyDutiesDto {
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  roster_date?: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
