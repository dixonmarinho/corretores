import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoCustomizedPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order?: number;
}
