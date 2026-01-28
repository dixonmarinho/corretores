// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../prisma.service';

// @Injectable()
// export class BaseService<T, CreateDto, UpdateDto> {
//   constructor(
//     protected readonly prisma: PrismaService,
//     protected readonly model: any // Prisma model delegate
//   ) {}

//   async create(data: CreateDto): Promise<T> {
//     return this.model.create({ data });
//   }

//   async findAll(): Promise<T[]> {
//     return this.model.findMany();
//   }

//   async findOne(id: number): Promise<T | null> {
//     return this.model.findUnique({ where: { id } });
//   }

//   async update(id: number, data: UpdateDto): Promise<T> {
//     return this.model.update({ where: { id }, data });
//   }

//   async remove(id: number): Promise<T> {
//     return this.model.delete({ where: { id } });
//   }
// }
