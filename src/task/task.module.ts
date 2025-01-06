import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TastController } from './task.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TastController],
  providers: [TaskService],
})
export class TaskModule {}
