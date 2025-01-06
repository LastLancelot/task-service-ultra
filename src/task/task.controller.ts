import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TastController {
  constructor(private readonly taskService: TaskService) {}
}
