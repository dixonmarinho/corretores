
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRoDailyDutiesDto {
  @ApiProperty({
  type: `string`,
  format: `date-time`,
})
roster_date: Date;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
