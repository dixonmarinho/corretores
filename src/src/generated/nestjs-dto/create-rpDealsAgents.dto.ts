import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateRpDealsAgentsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  assigned_seq: number;
  @ApiProperty({
    default: `PRIMARY`,
  })
  assigned_type?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
    default: `now`,
  })
  assigned_at?: Date;
  @ApiProperty({
    default: true,
  })
  is_active?: boolean;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
