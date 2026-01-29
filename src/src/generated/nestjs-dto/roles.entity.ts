
import {ApiProperty} from '@nestjs/swagger'
import {Profiles} from './profiles.entity'


export class Roles {
  id: string ;
name: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
created_at: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updated_at: Date  | null;
profiles?: Profiles[] ;
}
