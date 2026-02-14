import { ApiProperty } from '@nestjs/swagger';

export class UpdateStrategiesDto {
  code?: string;
  strategy_type?: string;
  name?: string;
  description?: string;
  is_singleton?: boolean;
  @ApiProperty({
    default: true,
  })
  fallback_enabled?: boolean;
  @ApiProperty({
    default: true,
  })
  is_active?: boolean;
}
