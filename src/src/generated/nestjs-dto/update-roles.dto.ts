
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRolesDto {
  name?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
