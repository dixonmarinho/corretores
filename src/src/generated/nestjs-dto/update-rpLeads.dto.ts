
import {ApiProperty} from '@nestjs/swagger'




export class UpdateRpLeadsDto {
  crm_lead_id?: string;
name?: string;
phone?: string;
email?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
