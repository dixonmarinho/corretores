import { ApiProperty } from '@nestjs/swagger';

export class AgenciesDto {
  name: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_agency_id: number;
}
