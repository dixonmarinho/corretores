
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRoShiftTypesDto {
  code?: string;
description?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
