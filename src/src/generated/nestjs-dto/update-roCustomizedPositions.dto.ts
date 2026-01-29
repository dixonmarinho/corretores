import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoCustomizedPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order?: number;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
