import { Controller, Get } from '@nestjs/common';
import { CooperationService } from './cooperation.service';

@Controller('cooperation')
export class CooperationController {
  constructor(private readonly cooperationService: CooperationService) {}
}
