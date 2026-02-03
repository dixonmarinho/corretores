import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class rolettePosition {
  @ApiProperty({ enum: ['DUTY', 'CUSTOM'] })
  contextType: 'DUTY' | 'CUSTOM';

  @ApiProperty({ format: 'uuid' })
  @IsUUID('4')
  keyId: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID('4')
  profileId: string;

  @ApiProperty({ default: 1 })
  newPosition: number = 1;
}
