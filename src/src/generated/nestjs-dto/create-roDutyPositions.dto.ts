import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateRoDutyPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order: number;
}
