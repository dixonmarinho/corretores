import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { RolettePositionService } from './rolettePosition.service';
import { rolettePosition } from 'src/models/rolettePosition';

@Controller('rolette-position')
export class RolettePositionController {
  constructor(
    private readonly rolettePositionService: RolettePositionService,
  ) {}

  @Post('move')
  async movePosition(
    @Body() roletteposition: rolettePosition,
  ): Promise<{ message: string }> {
    if (!roletteposition.contextType || !roletteposition.keyId) {
      throw new BadRequestException('contextType e keyId são obrigatórios.');
    }
    return this.rolettePositionService.movePosition({
      contextType: roletteposition.contextType,
      keyId: roletteposition.keyId,
      profileId: roletteposition.profileId,
      newPosition: roletteposition.newPosition,
    });
  }
}
