import { ApiProperty } from '@nestjs/swagger';

export class RoDutyPositionsDto {
  id: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order: number;
}
