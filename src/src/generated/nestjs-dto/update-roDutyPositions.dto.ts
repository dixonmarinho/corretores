import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoDutyPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order?: number;
}
