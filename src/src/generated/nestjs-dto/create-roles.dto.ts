import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateRolesDto {
  name: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  updated_at?: Date;
}
