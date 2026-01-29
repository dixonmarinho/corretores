
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRpDealsExecutionsDto {
  log?: string;
additional_info?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
