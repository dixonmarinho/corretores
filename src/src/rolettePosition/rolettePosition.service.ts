import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { rolettePositionRemove } from 'src/models/rolettePositionRemove';

interface MovePositionDto {
  contextType: 'DUTY' | 'CUSTOM';
  keyId: string;
  profileId?: string;
  newPosition?: number;
}

type CountResult = { count: string };
type PositionResult = { profile_id: string; position_order: number };

@Injectable()
export class RolettePositionService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Move um profile para uma nova posição na fila, ajustando a ordem dos demais conforme necessário.
   * Baseado na lógica de manipulação de filas SQL.
   * @param contextType 'DUTY' | 'CUSTOM'
   * @param keyId UUID do duty_window_id ou customized_queue_id
   * @param profileId UUID do profile a ser movido (opcional, se não informado move o primeiro da fila)
   * @param newPosition Nova posição desejada (opcional, se não informado move para o final)
   * @returns Mensagem de sucesso com detalhes do movimento
   */
  async movePosition({
    contextType,
    keyId,
    profileId,
    newPosition,
  }: MovePositionDto): Promise<{ message: string }> {
    // 1. Validação do tipo de contexto
    if (!['DUTY', 'CUSTOM'].includes(contextType)) {
      throw new BadRequestException(
        'As opções válidas para contextType são DUTY e CUSTOM',
      );
    }

    // 2. Definição de tabela e campo
    const table =
      contextType === 'DUTY' ? 'ro_duty_positions' : 'ro_customized_positions';
    const keyField =
      contextType === 'DUTY' ? 'duty_window_id' : 'customized_queue_id';

    // 3. Obtenção do total de posições
    const countResult = await this.prisma.$queryRawUnsafe<CountResult[]>(
      `SELECT COUNT(*)::text as count FROM public.${table} WHERE ${keyField} = $1`,
      keyId,
    );
    const totalPositions = parseInt(countResult[0]?.count || '0', 10);

    if (totalPositions === 0) {
      throw new BadRequestException('Fila vazia para a janela informada.');
    }

    // 4. Validação de newPosition
    if (
      newPosition !== undefined &&
      (newPosition <= 0 || newPosition > totalPositions)
    ) {
      throw new BadRequestException(
        `Posição inválida: ${newPosition}. A posição deve estar entre 1 e ${totalPositions}.`,
      );
    }

    // 5. Identificação do perfil alvo e posição atual
    let targetProfileId = profileId;
    let oldPosition: number;
    if (!targetProfileId) {
      // Busca o primeiro da fila
      const first = await this.prisma.$queryRawUnsafe<PositionResult[]>(
        `SELECT profile_id, position_order FROM public.${table} WHERE ${keyField} = $1 ORDER BY position_order ASC LIMIT 1`,
        keyId,
      );
      if (!first[0])
        throw new BadRequestException('Fila vazia para a janela informada.');
      targetProfileId = first[0].profile_id;
      oldPosition = first[0].position_order;
    } else {
      // Busca a posição atual do perfil
      const current = await this.prisma.$queryRawUnsafe<
        { position_order: number }[]
      >(
        `SELECT position_order FROM public.${table} WHERE ${keyField} = $1 AND profile_id = $2`,
        keyId,
        targetProfileId,
      );
      if (!current[0])
        throw new BadRequestException('Perfil não encontrado na fila.');
      oldPosition = current[0].position_order;
    }

    // 6. Define a nova posição
    const finalPosition = newPosition ?? totalPositions;
    if (oldPosition === finalPosition) {
      return { message: 'O perfil já ocupa a posição solicitada.' };
    }

    // 7. Move para posição temporária
    await this.prisma.$executeRawUnsafe(
      `UPDATE public.${table} SET position_order = -1 WHERE ${keyField} = $1 AND profile_id = $2`,
      keyId,
      targetProfileId,
    );

    // 8. Ajusta os outros registros
    if (oldPosition < finalPosition) {
      // Descendo na fila
      await this.prisma.$executeRawUnsafe(
        `UPDATE public.${table} SET position_order = position_order - 1 WHERE ${keyField} = $1 AND position_order > $2 AND position_order <= $3`,
        keyId,
        oldPosition,
        finalPosition,
      );
    } else {
      // Subindo na fila
      await this.prisma.$executeRawUnsafe(
        `UPDATE public.${table} SET position_order = position_order + 1 WHERE ${keyField} = $1 AND position_order >= $2 AND position_order < $3`,
        keyId,
        finalPosition,
        oldPosition,
      );
    }

    // 9. Coloca o alvo na nova posição
    await this.prisma.$executeRawUnsafe(
      `UPDATE public.${table} SET position_order = $1, updated_at = now() WHERE ${keyField} = $2 AND position_order = -1`,
      finalPosition,
      keyId,
    );

    return {
      message: `Fila atualizada. Profile ${targetProfileId} movido de ${oldPosition} para ${finalPosition}.`,
    };
  }

  /**
   * Remove um profile de uma posição, baseado na lógica do SQL fornecido.
   * @param contextType 'DUTY' | 'CUSTOM'
   * @param keyId UUID do duty_window_id ou customized_queue_id
   * @param profileId UUID do profile a ser removido
   */
  async removeProfileFromPosition(
    profileToRemove: rolettePositionRemove,
  ): Promise<{ message: string }> {
    // 1. Validação do tipo de contexto
    if (!['DUTY', 'CUSTOM'].includes(profileToRemove.contextType)) {
      throw new BadRequestException(
        'As opções válidas para contextType são DUTY e CUSTOM',
      );
    }

    // 2. Definição de tabela e campo
    const table =
      profileToRemove.contextType === 'DUTY'
        ? 'ro_duty_positions'
        : 'ro_customized_positions';
    const keyField =
      profileToRemove.contextType === 'DUTY'
        ? 'duty_window_id'
        : 'customized_queue_id';

    // 3. Verifica se o registro existe
    const exists = await this.prisma.$queryRawUnsafe<[{ count: string }]>(
      `SELECT COUNT(*)::text as count FROM public.${table} WHERE ${keyField} = $1 AND profile_id = $2`,
      profileToRemove.keyId,
      profileToRemove.profileId,
    );
    if (!exists[0] || parseInt(exists[0].count, 10) === 0) {
      throw new BadRequestException('Registro não encontrado para remoção.');
    }

    // 4. Busca a posição do profile
    const posResult = await this.prisma.$queryRawUnsafe<
      [{ position_order: number }]
    >(
      `SELECT position_order FROM public.${table} WHERE ${keyField} = $1 AND profile_id = $2`,
      profileToRemove.keyId,
      profileToRemove.profileId,
    );
    const positionOrder = posResult[0]?.position_order;
    if (!positionOrder) {
      throw new BadRequestException(
        'Não foi possível localizar a posição do profile.',
      );
    }

    // 5. Remove o registro
    await this.prisma.$executeRawUnsafe(
      `DELETE FROM public.${table} WHERE ${keyField} = $1 AND profile_id = $2`,
      profileToRemove.keyId,
      profileToRemove.profileId,
    );

    // 6. Atualiza as posições posteriores
    await this.prisma.$executeRawUnsafe(
      `UPDATE public.${table} SET position_order = position_order - 1 WHERE ${keyField} = $1 AND position_order > $2`,
      profileToRemove.keyId,
      positionOrder,
    );

    return { message: 'Perfil removido com sucesso!' };
  }
}
