import { ApiProperty } from '@nestjs/swagger';

export class RpAttemptsDto {
  path_link: string;
  message_id: string | null;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  attempt_seq: number;
  attempt_type: string | null;
  observation_redirect: string | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  sent_at: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  clicked_at: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  expired_at: Date | null;
  status_link: string | null;
}
