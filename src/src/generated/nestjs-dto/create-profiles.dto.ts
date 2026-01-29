
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateProfilesDto {
  full_name?: string;
name: string;
avatar_url?: string;
@ApiProperty({
  type: `integer`,
  format: `int32`,
})
crm_code: number;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
