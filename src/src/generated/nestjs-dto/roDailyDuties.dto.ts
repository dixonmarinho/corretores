import { ApiProperty } from '@nestjs/swagger';

export class RoDailyDutiesDto {
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  roster_date: Date;
}
