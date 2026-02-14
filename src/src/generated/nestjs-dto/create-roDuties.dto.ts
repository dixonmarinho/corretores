import { ApiHideProperty, ApiProperty, getSchemaPath } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';

export class CreateRoDutiesDto {
  code: string;
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
