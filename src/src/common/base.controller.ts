// src/common/base.controller.ts
import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Type, // Importante importar Type
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
} from '@nestjs/swagger';

// Transformamos em uma função que recebe os Tipos (construtores) como argumento
export function BaseController<C, U>(
  createDtoType: Type<C>,
  updateDtoType: Type<U>,
) {
  // A classe é definida dentro da função
  class BaseControllerHost {
    constructor(public readonly service: any) {}

    @Post()
    @ApiOperation({
      summary: 'Criar registro',
      description: 'Endpoint genérico para criar um novo registro.',
    })
    @ApiResponse({
      status: 201,
      description: 'Registro criado com sucesso.',
    })
    @ApiBody({ type: createDtoType }) // Agora usamos o valor real passado, não o genérico
    create(@Body() createDto: C) {
      return this.service.create(createDto);
    }

    @Get('/list-all')
    @ApiOperation({
      summary: 'Listar registros',
      description: 'Endpoint genérico para listar todos os registros.',
    })
    @ApiOkResponse({
      type: createDtoType,
      isArray: true,
      description: 'Lista de registros retornada com sucesso.',
    })
    findAll() {
      return this.service.findAll();
    }

    @Get(':id')
    @ApiOperation({
      summary: 'Buscar registro por ID',
      description:
        'Endpoint genérico para buscar um registro específico pelo ID.',
    })
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'Identificador numérico do registro.',
    })
    @ApiOkResponse({ type: createDtoType }) // Agora usamos o valor real passado, não o genérico
    findOne(@Param('id') id: string) {
      return this.service.findOne(+id);
    }

    @Patch(':id')
    @ApiOperation({
      summary: 'Atualizar registro',
      description:
        'Endpoint genérico para atualizar um registro existente pelo ID.',
    })
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'Identificador numérico do registro.',
    })
    @ApiResponse({
      status: 200,
      description: 'Registro atualizado com sucesso.',
    })
    @ApiBody({ type: updateDtoType }) // Também corrigimos o Patch
    update(@Param('id') id: string, @Body() updateDto: U) {
      return this.service.update(+id, updateDto);
    }

    @Delete(':id')
    @ApiOperation({
      summary: 'Remover registro',
      description: 'Endpoint genérico para remover um registro pelo ID.',
    })
    @ApiParam({
      name: 'id',
      type: Number,
      description: 'Identificador numérico do registro.',
    })
    @ApiResponse({
      status: 200,
      description: 'Registro removido com sucesso.',
    })
    remove(@Param('id') id: string) {
      return this.service.remove(+id);
    }
  }

  return BaseControllerHost;
}
