import { ApiProperty } from '@nestjs/swagger';

export class UpdateAgencySettingsDto {
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
