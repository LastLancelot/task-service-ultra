import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CooperationModule } from './cooperation/cooperation.module';
import { TaskModule } from './task/task.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CooperationModule, TaskModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
