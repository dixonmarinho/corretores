import { ApiProperty } from '@nestjs/swagger';

export class AgenciesDto {
  id: string;
  name: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_agency_id: number;
}
