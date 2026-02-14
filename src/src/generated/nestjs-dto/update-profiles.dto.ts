import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfilesDto {
  full_name?: string;
  name?: string;
  avatar_url?: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_code?: number;
}
