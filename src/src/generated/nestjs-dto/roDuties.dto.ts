import { ApiHideProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class RoDutiesDto {
  id: string;
  code: string;
  @ApiHideProperty() // Esconde do Swagger
  @Exclude()
  @ApiHideProperty() // Esconde do Swagger
  @Exclude()
  is_active: boolean | null;
  @ApiHideProperty() // Esconde do Swagger
  @Exclude()
  is_default: boolean | null;
}
