import { Controller, Get, Post, Put } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('task')
@Controller('task')
export class TastController {
  constructor(private readonly taskService: TaskService) {}
  @Post('')
  async create() {
    return;
  }

  @Put()
  async update() {
    return;
  }

  @Get('/:id')
  async getOneById() {
    return;
  }

  @Get('/user')
  async getUsersTask() {
    return;
  }
}
