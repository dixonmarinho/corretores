import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreatePropertiesDto {
  code: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
