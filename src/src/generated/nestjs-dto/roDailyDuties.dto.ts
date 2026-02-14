import { ApiProperty } from '@nestjs/swagger';

export class RoDailyDutiesDto {
  id: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  roster_date: Date;
}
