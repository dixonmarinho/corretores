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
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';

// Transformamos em uma função que recebe os Tipos (construtores) como argumento
export function BaseController<C, U>(
  createDtoType: Type<C>,
  updateDtoType: Type<U>,
) {
  // A classe é definida dentro da função
  class BaseControllerHost {
    constructor(public readonly service: any) {}

    @Post()
    @ApiBody({ type: createDtoType }) // Agora usamos o valor real passado, não o genérico
    create(@Body() createDto: C) {
      return this.service.create(createDto);
    }

    @Get()
    findAll() {
      return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.service.findOne(+id);
    }

    @Patch(':id')
    @ApiBody({ type: updateDtoType }) // Também corrigimos o Patch
    update(@Param('id') id: string, @Body() updateDto: U) {
      return this.service.update(+id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.service.remove(+id);
    }
  }

  return BaseControllerHost;
}
