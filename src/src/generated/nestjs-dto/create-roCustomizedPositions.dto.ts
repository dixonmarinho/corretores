import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateRoCustomizedPositionsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  position_order: number;
}
