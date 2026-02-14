import { ApiProperty } from '@nestjs/swagger';

export class RoCustomizedPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order: number;
}
