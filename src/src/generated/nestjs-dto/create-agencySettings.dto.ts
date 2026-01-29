
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateAgencySettingsDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
