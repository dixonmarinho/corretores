
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateRpLeadsDto {
  crm_lead_id: string;
name: string;
phone?: string;
email?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at?: Date;
}
