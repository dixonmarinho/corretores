import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateAgencyFallbackStrategiesDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  fallback_order: number;
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
