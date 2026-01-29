
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRoDutiesDto {
  code: string;
@ApiProperty({
  default: true,
})
is_active?: boolean;
@ApiProperty({
  default: false,
})
is_default?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
