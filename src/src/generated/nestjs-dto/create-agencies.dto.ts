import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateAgenciesDto {
  name: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  crm_agency_id: number;
}
