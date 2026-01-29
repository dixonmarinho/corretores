import { ApiProperty } from '@nestjs/swagger';

export class UpdateNotificationsDto {
  type?: string;
  title?: string;
  message?: string;
  severity?: string;
  related_entity_type?: string;
  related_entity_id?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  read_at?: Date;
}
