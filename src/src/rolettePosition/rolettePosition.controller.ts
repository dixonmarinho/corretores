import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { RolettePositionService } from './rolettePosition.service';

@Controller('rolette-position')
export class RolettePositionController {
  constructor(
    private readonly rolettePositionService: RolettePositionService,
  ) {}

  @Post('move')
  async movePosition(
    @Body('contextType') contextType: 'DUTY' | 'CUSTOM',
    @Body('keyId') keyId: string,
    @Body('profileId') profileId?: string,
    @Body('newPosition') newPosition?: number,
  ): Promise<{ message: string }> {
    if (!contextType || !keyId) {
      throw new BadRequestException('contextType e keyId são obrigatórios.');
    }
    return this.rolettePositionService.movePosition({
      contextType,
      keyId,
      profileId,
      newPosition,
    });
  }
}
