
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRoDutyWindowsDto {
  is_active?: boolean;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
