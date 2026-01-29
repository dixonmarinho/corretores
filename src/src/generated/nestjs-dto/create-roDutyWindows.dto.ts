
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRoDutyWindowsDto {
  is_active?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
