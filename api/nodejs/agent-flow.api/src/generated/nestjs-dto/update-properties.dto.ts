import { ApiProperty } from '@nestjs/swagger';

export class UpdatePropertiesDto {
  code?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
