
import {ApiProperty} from '@nestjs/swagger'




export class UpdateOriginsDto {
  code?: string;
description?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
