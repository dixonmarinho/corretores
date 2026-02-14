import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { RolettePositionService } from './rolettePosition.service';
import { rolettePosition } from 'src/models/rolettePosition';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { rolettePositionRemove } from 'src/models/rolettePositionRemove';
import { rolettePositionAdd } from 'src/models/rolettePositionAdd';

@ApiTags('RolettePosition')
@Controller('rolette-position')
export class RolettePositionController {
  constructor(
    private readonly rolettePositionService: RolettePositionService,
  ) {}

  @ApiOperation({
    summary: 'Move Perfil em Determinada Posição na Roleta',
    description:
      'Este endpoint move um perfil para uma nova posição na roleta de distribuição.',
  })
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

  @ApiOperation({
    summary: 'Adiciona Perfil na Roleta',
    description:
      'Este endpoint inclui um perfil em uma roleta (duty/custom/deal) na próxima posição disponível.',
  })
  @Post('add-profile')
  async addProfile(
    @Body() profileToAdd: rolettePositionAdd,
  ): Promise<{ message: string }> {
    return this.rolettePositionService.addProfileToPosition(profileToAdd);
  }

  @ApiOperation({
    summary: 'Remove Perfil da Roleta',
    description: 'Este endpoint remove um perfil da roleta de distribuição.',
  })
  @Post('remove-profile')
  async removeProfile(
    @Body() profileToRemove: rolettePositionRemove,
  ): Promise<{ message: string }> {
    return this.rolettePositionService.removeProfileFromPosition(
      profileToRemove,
    );
  }
}
