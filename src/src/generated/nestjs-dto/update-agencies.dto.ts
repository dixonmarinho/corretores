import { ApiProperty } from '@nestjs/swagger';

export class UpdateAgenciesDto {
  name?: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_agency_id?: number;
}
