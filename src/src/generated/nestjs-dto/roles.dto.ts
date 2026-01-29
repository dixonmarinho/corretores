import { ApiProperty } from '@nestjs/swagger';

export class RolesDto {
  id: string;
  name: string;
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
}
