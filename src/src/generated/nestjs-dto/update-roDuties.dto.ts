import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class UpdateRoDutiesDto {
  code?: string;
  @ApiProperty({
    default: true,
  })
  is_active?: boolean;
  @ApiProperty({
    default: false,
  })
  @ApiHideProperty() // Esconde do Swagger
  @Exclude()
  is_default?: boolean;
}
