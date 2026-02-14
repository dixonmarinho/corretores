import { ApiProperty } from '@nestjs/swagger';

export class AgencyFallbackStrategiesDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  fallback_order: number;
  is_active: boolean | null;
}
