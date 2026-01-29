
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRpAttemptsDto {
  path_link: string;
message_id?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
attempt_seq: number;
@ApiProperty({
  default: `PRIMARY`,
})
attempt_type?: string;
observation_redirect?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
  default: `now`,
})
sent_at?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
clicked_at?: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
expired_at?: Date;
@ApiProperty({
  default: `WAITING`,
})
status_link?: string;
}
