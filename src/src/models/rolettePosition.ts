import { ApiProperty } from '@nestjs/swagger';

export class rolettePosition {
  @ApiProperty({ enum: ['DUTY', 'CUSTOM'] })
  contextType: 'DUTY' | 'CUSTOM';

  @ApiProperty()
  keyId: string;

  @ApiProperty()
  profileId: string;

  @ApiProperty()
  newPosition: number;
}
