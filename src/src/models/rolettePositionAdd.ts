import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class rolettePositionAdd {
  @ApiProperty({ enum: ['DUTY_POSITION', 'CUSTOM_QUEUE', 'DEAL_ASSIGNMENT'] })
  contextType: 'DUTY_POSITION' | 'CUSTOM_QUEUE' | 'DEAL_ASSIGNMENT';

  @ApiProperty({ format: 'uuid' })
  @IsUUID('4')
  keyId: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID('4')
  profileId: string;
}
