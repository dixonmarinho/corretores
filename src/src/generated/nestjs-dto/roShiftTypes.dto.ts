
import {ApiProperty} from '@nestjs/swagger'


export class RoShiftTypesDto {
  id: string ;
code: string ;
description: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
created_at: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at: Date  | null;
}
