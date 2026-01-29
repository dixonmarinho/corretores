
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateOriginsDto {
  code: string;
description?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
