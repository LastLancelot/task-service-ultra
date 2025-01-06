import { Module } from '@nestjs/common';
import { CooperationController } from './cooperation.controller';
import { CooperationService } from './cooperation.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [CooperationController],
  providers: [CooperationService],
})
export class CooperationModule {}
