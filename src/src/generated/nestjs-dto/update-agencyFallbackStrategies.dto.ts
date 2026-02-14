import { ApiProperty } from '@nestjs/swagger';

export class UpdateAgencyFallbackStrategiesDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  fallback_order?: number;
  @ApiProperty({
    default: true,
  })
  is_active?: boolean;
}
