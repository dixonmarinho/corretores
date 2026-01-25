import { ApiProperty } from '@nestjs/swagger';
import { Strategies } from './strategies.entity';

export class AgencyFallbackStrategies {
  id: string;
  strategy_id: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  fallback_order: number;
  is_active: boolean | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  created_at: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at: Date | null;
  strategies?: Strategies;
}
