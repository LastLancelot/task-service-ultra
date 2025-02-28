import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CooperationService } from './cooperation.service';
import { ICooperationController } from './interfaces/cooperation.controller.interface';

@Controller('cooperation')
export class CooperationController implements ICooperationController {
  constructor(private readonly cooperationService: CooperationService) {}
  @Get('')
  async getAllByUSer(userId: string) {}
  @Get('/:id')
  async getById(id: string) {}
  @Post('')
  async create(data: any) {}
  @Put('/:id')
  async update(id: string, data: any) {}
  @Delete('/:id')
  async delete(id: string) {}
}
