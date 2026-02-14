import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsIn, IsNumber, IsOptional, IsString, Max, Min } from 'class-validator';

export class GenerateAiDto {
  @ApiProperty({
    description: 'Texto do prompt para geração de resposta.',
    example: 'Crie um resumo curto sobre leads imobiliários.',
  })
  @IsString()
  prompt: string;

  @ApiPropertyOptional({
    description: 'Provedor de IA. auto tenta OpenAI e depois Gemini.',
    enum: ['auto', 'openai', 'gemini'],
    default: 'auto',
  })
  @IsOptional()
  @IsIn(['auto', 'openai', 'gemini'])
  provider?: 'auto' | 'openai' | 'gemini';

  @ApiPropertyOptional({
    description: 'Temperatura da geração.',
    minimum: 0,
    maximum: 2,
    default: 0.7,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(2)
  temperature?: number;

  @ApiPropertyOptional({
    description: 'Limite de tokens na saída.',
    minimum: 1,
    default: 512,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  maxTokens?: number;
}
