
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRpDealsExecutionsDto {
  log?: string;
additional_info?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
