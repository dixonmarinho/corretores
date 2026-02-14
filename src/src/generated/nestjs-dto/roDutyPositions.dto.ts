import { ApiProperty } from '@nestjs/swagger';

export class RoDutyPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order: number;
}
