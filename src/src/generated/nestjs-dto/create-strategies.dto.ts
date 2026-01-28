import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateStrategiesDto {
  code: string;
  strategy_type: string;
  name: string;
  description?: string;
  is_singleton: boolean;
  @ApiProperty({
    default: true,
  })
  fallback_enabled?: boolean;
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
