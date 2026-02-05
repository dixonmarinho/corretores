import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class rolettePositionRemove {
  @ApiProperty({ enum: ['DUTY', 'CUSTOM'] })
  contextType: 'DUTY' | 'CUSTOM';

  @ApiProperty({ format: 'uuid' })
  @IsUUID('4')
  keyId: string;

  @ApiProperty({ format: 'uuid' })
  @IsUUID('4')
  profileId: string;

}
