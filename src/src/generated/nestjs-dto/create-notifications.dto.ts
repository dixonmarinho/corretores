import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateNotificationsDto {
  type: string;
  title: string;
  message: string;
  severity: string;
  related_entity_type?: string;
  related_entity_id?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  read_at?: Date;
}
